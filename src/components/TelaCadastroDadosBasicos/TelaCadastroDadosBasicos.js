import {StyleButton, StyleBoxContainer, StyleLogoBox, StyleMainBox, StyleFooterBox, StyleInput, StyleDivSocial, StyleBoxButton, StyleDiv} from "./styleTelaCadastroDadosBasicos"
import logo from "../../assets/logo.png"
import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"

function TelaCadastroDadosBasicos(props){
    return (
        <StyleBoxContainer>
            <StyleLogoBox>
                <StyleDiv>
                    <img className="img-logo"src={logo} alt="logo"/>
                </StyleDiv>
            </StyleLogoBox>
            <StyleMainBox>
                <StyleDiv>
                    <h2>Cadastro de Usuário</h2>
                </StyleDiv>
                <StyleDiv>
                    <p>ENDEREÇO DE E-MAIL:</p>
                    <StyleInput type="text" placeholder="ENDEREÇO DE E-MAIL"/>
                    <p>DIGITE UMA SENHA:</p>
                    <StyleInput type="password" placeholder="DIGITE UMA SENHA"/>
                    <p>CONFIRME SUA SENHA:</p>
                    <StyleInput type="password" placeholder="CONFIRME SUA SENHA"/>

                </StyleDiv>
                <StyleBoxButton>
                    <StyleButton onClick={()=>{props.mudarTela(1)}}>Voltar</StyleButton>
                    <StyleButton onClick={()=>{props.mudarTela(3)}}>Avançar</StyleButton>
                </StyleBoxButton>
            </StyleMainBox>
            <StyleFooterBox>
                <StyleDiv>
                    <StyleDivSocial>
                    <a href="https://github.com/DanielEmidio1988" target="_blank"><img className="icon-logo-social" src={github} alt="github"/></a>
                    <a href="https://www.linkedin.com/in/danielemidio1988/" target="_blank"><img className="icon-logo-social" src={linkedin} alt="linkedin"/></a>
                    </StyleDivSocial>
                </StyleDiv>
            </StyleFooterBox>

        </StyleBoxContainer>
    )
}

export default TelaCadastroDadosBasicos