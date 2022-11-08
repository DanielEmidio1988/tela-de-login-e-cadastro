import { createGlobalStyle } from "styled-components"
import fundo from "./assets/Fundo.jpg"


export const GlobalStyle = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body{
        background-image: url(${fundo});
        background-position: top center;
        background-size: 100% auto;
        background-repeat: no-repeat;
      }

      a:hover{
        cursor: pointer;
        color: #F88050;
      }
    `