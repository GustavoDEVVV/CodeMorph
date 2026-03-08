from flask import Flask
from flask_cors import CORS
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "API CodeMorph rodando"

@app.route("/convert", methods=["POST"])
def convert():
    data = request.get_json()

    code = data.get("code")
    framework = data.get("framework")

    if not code or not framework:
        return jsonify({"error": "Dados inválidos"}), 400

    return jsonify({
        "result": f"Código recebido para converter para {framework}"
    })

if __name__ == "__main__":
    app.run(debug=True)