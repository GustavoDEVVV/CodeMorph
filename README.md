# Descrição do Projeto

Nome sugerido:

**CodeMorph**

Descrição:

O **CodeMorph** é uma ferramenta web que converte código **HTML** (com ou sem JavaScript embutido) em componentes de frameworks modernos como **React, Vue e Angular** utilizando **Inteligência Artificial**.

O usuário cola um HTML, escolhe o framework desejado e o sistema gera automaticamente o código equivalente.

Durante esse processo, a IA também analisa a **estrutura do layout** e pode dividir o código em **componentes reutilizáveis**, seguindo boas práticas de desenvolvimento frontend.

Objetivo técnico do projeto:

- Demonstrar integração **React + Python**
- Utilizar uma **API de IA**
- Fazer **transformação automática de código**
- Trabalhar com arquitetura **frontend + backend**

---

# Links

Trello: [Link](https://trello.com/invite/b/69ac9c7e6781ff3537b9fc66/ATTI295a283096e7a99050185de6c7b116851E91C034/ia-de-conversao-de-codigo)

Aplicação online: [Link](https://code-morph-wine.vercel.app) 

API: [Linnk](https://codemorph-joav.onrender.com) 

Repositório: [Link](https://github.com/GustavoDEVVV/CodeMorph) 

---

# Stack Tecnológica

## Frontend

- React
- JavaScript
- CSS
- Fetch API
- Vite

## Backend

- Python
- Flask
- API do **Gemini**

## Bibliotecas Python

```
flask
flask-cors
google-generativeai
```

---

# Arquitetura real de deploy

Arquitetura de Deploy

O sistema utiliza uma arquitetura separando frontend e backend.

Frontend: React + Vite

Hospedagem: Vercel

Backend: Python + Flask

Hospedagem: Render

Fluxo da aplicação:

Usuário

↓

Frontend (React - Vercel)

↓

Fetch API

↓

Backend (Flask - Render)

↓

API Gemini (IA)

↓

Resposta convertida

↓

Frontend exibe o resultado

# Estrutura de Pastas

Separar **frontend** e **backend** ajuda a manter o projeto organizado e facilita a manutenção.

```
html-framework-converter/

backend/
│
├── app.py
├── requirements.txt
└── services/
    └── ai_converter.py

CodeMorph/
│
├── package.json
├── index.html
└── src/
    │
    ├── main.jsx
    ├── App.jsx
    │
    ├── components/
    │   ├── CodeInput.jsx
    |   |── LoadingOverlay.jsx
    |   ├── loading.css
    │   ├── FrameworkSelector.jsx
    │   ├── ConvertButton.jsx
    │   └── ResultViewer.jsx
    │
    └── styles/
        └── app.css
```

---

# Funcionalidades do Sistema

## Entrada de HTML

O usuário pode colar qualquer código HTML no campo de entrada.

Exemplo:

```
<header>
<nav>Menu</nav>
</header>
```

---

## Escolha do Framework

O usuário pode escolher para qual framework deseja converter o código.

Opções disponíveis:

```
React
Vue
Angular
```

---

## Conversão via IA

O frontend envia os dados para o backend no seguinte formato:

```
{
 "html":"...",
 "framework":"react"
}
```

O backend então envia essas informações para a IA, que faz a conversão.

---

## Análise da estrutura do HTML

Além de converter o código, a IA também analisa a estrutura do layout.

Ela tenta identificar partes importantes do HTML como:

- header
- footer
- nav
- section
- cards
- formulários
- blocos repetidos
- áreas principais do layout

Com base nisso, a IA pode **separar o código em componentes reutilizáveis**, algo comum em frameworks modernos.

Exemplo de divisão automática:

```
App
 ├ Header
 ├ PostsSection
 │   └ PostCard
 └ Footer
```

Isso ajuda a gerar um código mais organizado e parecido com projetos reais.

---

## Comentários no código gerado

Durante a conversão, a IA também pode adicionar **comentários no código** explicando a estrutura gerada ou sugerindo melhorias.

Exemplo:

```
// Componente responsável pelo cabeçalho da aplicação
function AppHeader(){
 ...
}
```

Esses comentários ajudam a entender melhor o código gerado.

---

## Exibição lado a lado

O layout final da aplicação mostra o **HTML original** e o **código convertido** lado a lado.

Exemplo:

```
HTML ORIGINAL      |     CÓDIGO CONVERTIDO
------------------------------------------------
<textarea>         |   <pre>
```

Isso facilita comparar o código antes e depois da conversão.

---

# Estrutura do Frontend (React)

O frontend é responsável por:

- receber o código HTML do usuário
- permitir a escolha do framework
- enviar a requisição para o backend
- exibir o resultado da conversão

Fluxo de uso:

```
Usuário cola HTML
↓
Escolhe framework
↓
Clica em converter
↓
React envia requisição
↓
Recebe resposta do backend
↓
Mostra código convertido
```

---

# Componentes React

## App.jsx

Componente principal da aplicação.

Ele controla os estados principais da interface:

```
htmlInput
frameworkSelecionado
resultadoConvertido
loading
```

Também organiza o layout da página.

---

## CodeInput.jsx

Textarea onde o usuário cola o código HTML.

Responsável por:

- capturar o código inserido
- atualizar o estado da aplicação

---

## FrameworkSelector.jsx

Dropdown que permite escolher o framework.

Exemplo:

```
<select>
React
Vue
Angular
</select>
```

---

## ConvertButton.jsx

Botão responsável por iniciar o processo de conversão.

Função principal:

```
enviar HTML + framework para o backend
```

---

## ResultViewer.jsx

Componente responsável por exibir o código retornado pela IA.

O resultado é mostrado dentro de:

```
<pre>
```

para manter a formatação do código.

## Comunicação entre frontend e backend

O frontend realiza a comunicação com o backend utilizando Fetch API.

Exemplo de requisição:

fetch("https://codemorph-joav.onrender.com/convert", {

method: "POST",

headers: {

"Content-Type": "application/json"

},

body: JSON.stringify({

html: codigoHTML,

framework: frameworkSelecionado

})

})

---

# Estrutura do Backend (Flask)

O backend é responsável por:

- receber requisições do React
- montar o prompt para a IA
- chamar a API do Gemini
- retornar o código convertido

Fluxo interno:

```
React
 ↓
POST /converter
 ↓
Flask
 ↓
Gemini (IA)
 ↓
Flask
 ↓
React
```

---

# Rotas da API

## POST /convert

Recebe:

```
{
 "html":"...",
 "framework":"react"
}
```

Retorna:

```
{
 "codigo":"resultado convertido"
}
```

Esse resultado contém o código gerado pela IA.

---

# Lógica da IA (Gemini)

Arquivo responsável:

```
back_end/app.py
```

Função principal:

```
converter_html(html, framework)
```

Essa função monta o prompt que será enviado para a IA e retorna o resultado da conversão.

---

# Estrutura do Prompt

O prompt enviado para a IA pede duas coisas principais:

1. Converter o HTML para o framework escolhido
2. Analisar a estrutura do código

Exemplo simplificado:

```
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
```

---

# Como rodar o projeto (Localmente)

## Backend

```
cd backend
pip install -r requirements.txt
python app.py
```

---

## Frontend

```
cd frontend
npm install
npm run dev
```

---

# Execução em produção

Deploy da aplicação

Frontend deployado na Vercel:

https://code-morph-wine.vercel.app

Backend deployado no Render:

https://codemorph-joav.onrender.com

O deploy é realizado automaticamente a partir do repositório no GitHub.

Sempre que alterações são enviadas para o branch main, a Vercel e o Render realizam o redeploy da aplicação.

# **Versão do projeto**

Versão do Projeto

Versão atual: v1.0

Status: Produção

Data do primeiro deploy:

Março de 2026

# Melhorias Futuras

O projeto ainda pode evoluir bastante. Algumas melhorias planejadas são:

## Suporte a mais frameworks

Adicionar suporte a novos ecossistemas como:

- Next.js
- Nuxt
- Svelte

Isso permitiria converter HTML para diferentes stacks modernas.

---

## Conversão de estilos

Uma melhoria interessante seria converter estilos tradicionais em frameworks modernos como:

- TailwindCSS

Isso ajudaria desenvolvedores a modernizar projetos antigos.

---

## Melhor análise estrutural

A IA poderá melhorar ainda mais a detecção de padrões de interface como:

- Navbar
- Hero sections
- Grid layouts
- Sidebars
- Cards

Isso tornaria a geração de componentes ainda mais inteligente.
