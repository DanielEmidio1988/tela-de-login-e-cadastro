import { GlobalStyle }  from "./GlobalStyle"
import TeladeLogin from "./components/TeladeLogin/TeladeLogin";
import TelaCadastroDadosPessoais from "./components/TelaCadastroDadosPessoais/TelaCadastroDadosPessoais";
import styled from "styled-components";
import { useState } from "react";
// import fundo from "./assets/Fundo.jpg"



const StyleContainer = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      `

function App() {

  const [tela, setTela] = useState(1)

  function mudarTela (valor){
    setTela(valor)
  }

  function renderizaTela (){
    switch(tela){
      case 1:
        return <TeladeLogin mudarTela={mudarTela}/>
      case 2:
        return <TelaCadastroDadosPessoais mudarTela={mudarTela}/>
      default:
        return <TeladeLogin mudarTela={mudarTela}/>
    }
  }

  return (
    <StyleContainer>
    <GlobalStyle/>
    {renderizaTela()}
    </StyleContainer>
  );
}

export default App;
