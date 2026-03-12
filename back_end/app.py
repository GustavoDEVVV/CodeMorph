from flask import Flask
from flask_cors import CORS
from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import os
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
for m in genai.list_models():
    if "generateContent" in m.supported_generation_methods:
        print(m.name)

app = Flask(__name__)
CORS(app)

load_dotenv()

@app.route("/")
def home():
    return "API CodeMorph rodando"

# função que puxa a API do Gemini pra fazer a conversão do HTML para o framework escolhido
def converter_html(html, framework):

# Aqui a gente passa uma logica pra o modelo saber como se comportar e o que fazer
    prompt = f"""
    Você é um engenheiro frontend sênior.

    Analise o HTML fornecido e converta para {framework}.

    Etapas:

    1. Analise a estrutura do HTML
    2. Detecte blocos estruturais como header, nav, section, card e footer
    3. Identifique partes que podem virar componentes reutilizáveis
    4. Gere o código no framework solicitado

    Regras importantes:

    - Retorne apenas o código
    - Não escreva explicações fora do código
    - Use comentários apenas quando necessário
    - Evite comentários redundantes
    - Prefira código limpo e legível
    - Use boas práticas do framework
    - Preserve qualquer JavaScript existente
    - Utilize nomes claros para componentes

    Comentários permitidos:
    - JSDoc no topo do componente
    - comentários curtos explicando decisões estruturais

    HTML de entrada:
    {html}
    """

    try:
        model = genai.GenerativeModel("gemini-2.5-flash")
        resposta = model.generate_content(prompt)
    except Exception as e:
        print("Erro ao chamar Gemini:", e)
        return "Erro ao gerar código com IA."

    codigo = resposta.text

    # limpar markdown
    codigo = codigo.replace("```jsx", "")
    codigo = codigo.replace("```vue", "")
    codigo = codigo.replace("```typescript", "")
    codigo = codigo.replace("```", "")

    # Retorna a nossa resposta 
    return codigo.strip()

@app.route("/convert", methods=["POST"])
def convert():
    try:
        data = request.get_json()

        code = data.get("code")
        framework = data.get("framework")

        if not code or not framework:
            return jsonify({"error": "Dados inválidos"}), 400

        novo_codigo = converter_html(code, framework)

        return jsonify({
            "convertedCode": novo_codigo
        })

    except Exception as e:
        print("ERRO NO BACKEND:", e)

        return jsonify({
            "error": str(e)
        }), 500

if __name__ == "__main__":
    app.run(debug=True)