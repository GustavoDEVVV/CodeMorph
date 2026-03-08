import React, { useState, useEffect } from "react";
import "./StyleDoCorpo.css";
import Github from "../../src/assets/Github.png";
import Linkedin from "../../src/assets/Linkedin.png";
import Instagram from "../../src/assets/Instagram.png";

export function useScrollAnimation() {
    useEffect(() => {
        const elements = document.querySelectorAll(".scroll-animation");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            { threshold: 0.2 }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
}

export function CorpoDaPagina({ onConvert }) {

    async function converter() {
        const response = await fetch("http://localhost:5000/convert", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                code: code,
                framework: framework
            })
        })
        const data = await response.json()
        onConvert(code, data.result)
    }

    useScrollAnimation();

    const [code, setCode] = useState("");
    const [framework, setFramework] = useState("react");

    return ( 

        <div className="pagina" >

            {/* NAVBAR */}

            <nav className="navbar">
                <div className="logo">&lt;/&gt; CodeMorph</div>

                <div className="menu">
                    <a href="#">Home</a>
                    <a href="#">Sobre</a>
                </div>
                <a href="#">
                    <button className="btnContato">Contato</button>
                </a>
            </nav>


            {/* HERO */}

            <section className="hero scroll-animation">

                <h1>
                    Transforme seu HTML em uma das linguagens <br />
                    mais modernas do <span>mercado</span>
                </h1>

                <div className="heroButtons">
                    <a href="#converter">
                        <button className="btnPrincipal">Comece a criar →</button>
                    </a>
                    <button className="btnSecundario">Uso Gratis</button>
                </div>

            </section>


            {/* CONVERTER */}

            <section className="converter scroll-animation" id="converter">

                <h2>
                    <span>Olá,</span>
                    <br />
                    Por onde começamos?
                </h2>

                <div className="converterBox">

                    <textarea
                        placeholder="Cole seu código aqui..."
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />

                    <div className="converterControls">

                        <select
                            value={framework}
                            onChange={(e) => setFramework(e.target.value)}
                        >
                            <option value="react">React</option>
                            <option value="vue">Vue</option>
                            <option value="angular">Angular</option>
                        </select>

                        <button className="btnEnviar" onClick={converter} disabled={!code}>
                            ↑
                        </button>

                    </div>

                </div>

            </section>


            {/* SOBRE */}

            <section className="sobre scroll-animation">

                <h2>
                    Qual o proposito do <br /><span>CodeMorph?</span>
                </h2>

                <div className="sobreGrid">

                    <div className="sobreCard">

                        <div className="logoCard">
                            &lt;/&gt; CodeMorph
                        </div>

                        <p>
                            Pare de perder tempo fazendo as <br />
                            <span> coisas manualmente</span>
                        </p>

                    </div>


                    <div className="sobreTexto">

                        <p id="P_Black">
                            Ele nasceu da necessidade de estar sempre mudando códigos simples
                            de aplicações para frameworks; depois de um tempo, isso demandava muito
                            tempo e esforço perdido, então o <span>CodeMorph nasceu.</span>
                        </p>

                        <p>
                            Uma ferramenta web que converte código HTML (com ou sem JavaScript embutido)
                            em componentes de frameworks modernos como React, Vue e Angular utilizando IA.
                            O usuário cola o HTML, escolhe o framework desejado e o sistema gera automaticamente
                            o código equivalente.
                        </p>

                    </div>

                </div>

            </section>


            {/* FOOTER */}

            <footer className="footer scroll-animation">

                <div className="footerLeft">

                    <h3>&lt;/&gt; CodeMorph</h3>

                    <p>
                        Transforme seu HTML em uma das <br /> linguagens
                        mais modernas do <span>mercado</span>
                    </p>

                    <div className="redes">
                        <a href=""><img src={Github} alt="Prato de salada" /></a>
                        <a href=""><img src={Linkedin} alt="Prato de salada" /></a>
                        <a href=""><img src={Instagram} alt="Prato de salada" /></a>
                    </div>

                </div>


                <div className="footerLinks">

                    <div id="Footer1">

                        <h4>recursos</h4>

                        <a href="">
                            <p>Documentação</p>
                        </a>
                        <a href="">
                            <p>Termos e Condições</p>
                        </a>

                    </div>


                    <div id="Footer1">

                        <h4>Contato</h4>
                        <a href="">
                            <p>Instagram</p>
                        </a>
                        <a href="">
                            <p>Linkedin</p>
                        </a>
                        <a href="">
                            <p>Github</p>
                        </a>

                    </div>

                </div>

            </footer>

        </div>

    );

}