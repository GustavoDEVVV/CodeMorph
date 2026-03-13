import { useState } from "react"
import { CorpoDaPagina } from "./components/CorpoDapagina"
import { Result } from "./components/Result"
import LoadingOverlay from "./components/LoadingOverlay"

function App() {

  const [pagina, setPagina] = useState("home")

  const [codigoOriginal, setCodigoOriginal] = useState("")
  const [codigoConvertido, setCodigoConvertido] = useState("")

  const [loading, setLoading] = useState(false)

  function mostrarResultado(original, novo) {

    setCodigoOriginal(original)
    setCodigoConvertido(novo)

    setLoading(false)
    setPagina("resultado")

  }

  function voltar() {

    setPagina("home")

  }

  return (

    <>

      {loading && <LoadingOverlay />}

      {pagina === "home" && (
        <CorpoDaPagina 
          onConvert={mostrarResultado}
          setLoading={setLoading}
        />
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