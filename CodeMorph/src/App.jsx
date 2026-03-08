import { useState } from "react"
import { CorpoDaPagina } from "./components/CorpoDapagina"
import { Result } from "./components/Result"

function App() {

  const [pagina, setPagina] = useState("home")

  const [codigoOriginal, setCodigoOriginal] = useState("")
  const [codigoConvertido, setCodigoConvertido] = useState("")

  function mostrarResultado(original, novo) {

    setCodigoOriginal(original)
    setCodigoConvertido(novo)

    setPagina("resultado")

  }

  function voltar() {

    setPagina("home")

  }

  return (

    <>

      {pagina === "home" && (
        <CorpoDaPagina onConvert={mostrarResultado} />
      )}

      {pagina === "resultado" && (
        <Result
          originalCode={codigoOriginal}
          convertedCode={codigoConvertido}
          voltar={voltar}
        />
      )}

    </>

  )

}

export default App