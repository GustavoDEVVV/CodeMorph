import React from "react";
import "./StyleResults.css";

export function Result({ originalCode, convertedCode, voltar }) {

    return (

        <div className="paginaResultado">

            {/* NAVBAR */}

            <nav className="navbar">
                <div className="logo">&lt;/&gt; CodeMorph</div>

                <div className="menu">
                    <a href="/">Home</a>
                    <a href="/">Sobre</a>
                </div>
                <a href="/">
                    <button className="btnContato">Contato</button>
                </a>
            </nav>


            {/* TITULO */}

            <section className="resultadoHeader">

                <h2>
                    <span>Pronto,</span>
                </h2>

                <h1>
                    Aqui está seu resultado
                </h1>

            </section>


            {/* CÓDIGOS */}

            <section className="resultadoContainer">

                {/* CODIGO ORIGINAL */}

                <div className="codigoBox">

                    <div className="codigoTitulo">
                        Seu código
                    </div>

                    <pre>
                        {originalCode}
                    </pre>

                </div>


                {/* CODIGO NOVO */}

                <div className="codigoBox">

                    <div className="codigoTitulo">
                        Código novo
                    </div>

                    <pre>
                        {convertedCode}
                    </pre>

                </div>

            </section>


            {/* FOOTER */}

            <footer className="footer">

                <div className="footerLeft">

                    <h3>&lt;/&gt; CodeMorph</h3>

                    <p>
                        Transforme seu HTML em uma das linguagens
                        mais modernas do <span>mercado</span>
                    </p>

                </div>

                <div className="footerLinks">

                    <div>
                        <h4>recursos</h4>
                        <p>Documentação</p>
                        <p>Termos e Condições</p>
                    </div>

                    <div>
                        <h4>Contato</h4>
                        <p>Instagram</p>
                        <p>Linkedin</p>
                        <p>Github</p>
                    </div>

                </div>

            </footer>

        </div>

    );

}