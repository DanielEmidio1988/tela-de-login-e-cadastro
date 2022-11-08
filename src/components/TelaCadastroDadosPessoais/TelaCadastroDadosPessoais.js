import {StyleButton, StyleBoxContainer, StyleLogoBox, StyleMainBox, StyleFooterBox, StyleInput, StyleDivSocial, StyleBoxButton, StyleDiv} from "./styleTelaCadastroDadosPessoais"
import logo from "../../assets/logo.png"
import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"

function TelaCadastroDadosPessoais(props){
    return (
        <StyleBoxContainer>
            <StyleLogoBox>
                <StyleDiv>
                    <img class="img-logo"src={logo} alt="logo"/>
                </StyleDiv>
            </StyleLogoBox>
            <StyleMainBox>
                <StyleDiv>
                    <h2>Cadastro de Usuário</h2>
                </StyleDiv>
                <StyleDiv>
                    <p>ENDEREÇO DE E-MAIL:</p>
                    <StyleInput type="password" placeholder="ENDEREÇO DE E-MAIL"/>
                    <p>DIGITE UMA SENHA:</p>
                    <StyleInput type="password" placeholder="ENDEREÇO DE E-MAIL"/>
                    <p>CONFIRME SUA SENHA:</p>
                    <StyleInput type="password" placeholder="ENDEREÇO DE E-MAIL"/>

                </StyleDiv>
                <StyleBoxButton>
                    <StyleButton onClick={()=>{props.mudarTela(1)}}>Voltar</StyleButton>
                    <StyleButton onClick={()=>{props.mudarTela(3)}}>Avançar</StyleButton>
                </StyleBoxButton>
            </StyleMainBox>
            <StyleFooterBox>
                <StyleDiv>
                    <StyleDivSocial>
                    <a href="https://github.com/DanielEmidio1988" target="_blank"><img class="icon-logo-social" src={github} alt="github"/></a>
                    <a href="https://www.linkedin.com/in/danielemidio1988/" target="_blank"><img class="icon-logo-social" src={linkedin} alt="linkedin"/></a>
                    </StyleDivSocial>
                </StyleDiv>
            </StyleFooterBox>

        </StyleBoxContainer>
    )
}

export default TelaCadastroDadosPessoais