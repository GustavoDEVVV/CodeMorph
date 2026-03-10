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
    Converta o seguinte código HTML para {framework}.

    Regras:
    - Preserve o JavaScript se existir
    - Use boas práticas do {framework}
    - Retorne apenas o código
    - Não explique nada

    HTML:
    {html}
    """

    model = genai.GenerativeModel("gemini-2.5-flash")
    resposta = model.generate_content(prompt)

    codigo = resposta.text
    codigo = codigo.replace("```jsx", "")
    codigo = codigo.replace("```javascript", "")
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