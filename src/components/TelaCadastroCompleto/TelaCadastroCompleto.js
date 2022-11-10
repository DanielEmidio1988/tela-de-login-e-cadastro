import { StyleButton, StyleBoxContainer, StyleLogoBox, StyleMainBox, StyleFooterBox, StyleInput, StyleDivSocial, StyleDivCadastro, StyleBoxButton, StyleDiv } from "./styleTelaCadastroCompleto"
import logo from "../../assets/logo.png"
import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"
import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon2.png"
import icon3 from "../../assets/icon3.png"
import perfil from "../../assets/perfil.jpg"
import { useState } from "react"

function TelaCadastroCompleto(props){

    const [usuario, setUsuario] = useState([{}]) //objeto que vai armazenar os dados de usuários cadastrados !!!ELEVAR A VARIÁVEL
    const [nomeUsuario, setNomeUsuario] = useState("") //armazenar nome do usuário
    const [apelido, setApelido] = useState("") //armazenar apelido do usuário
    const [dtNascimento, setDtNascimento] = useState("") //armazenar data de nascimento do usuário
    const [fotoPerfil, setFotoPerfil] = useState(perfil)
    const [novaFoto, setNovaFoto] = useState("") //Variavel que vai receber a nova foto upload
    const [rank, setRank] = useState(icon1)


    function onChangeFotoPerfil (event){
        setFotoPerfil(event.target.value)
    }

    function onChangeNomeUsuario (event){
        setNomeUsuario(event.target.value)
        console.log(event.target.value)
    }

    function onChangeApelido (event){
        setApelido(event.target.value)
        console.log(event.target.value)
    }

    function onChangeDtNascimento (event){
        setDtNascimento(event.target.value)
        console.log(event.target.value)
    }

    function onChangeRank (event){
        setRank(event.target.value)
        console.log(event.target.value)
    }   

    //função que fará a mudança de rank, cada pontuação aumenta o rank
    function mudaRank(){
        let i = 0 //variável que fará o controle da pontuação por cada campo preenchido
        if (nomeUsuario !== ""){
            i++
        }
        if (apelido !== ""){
            i++
        }
        if (dtNascimento !== ""){
            i++
        }
        switch(i){
            case 1:       
                console.log("Rank 1");
                return rank = icon1;
            case 2:
                console.log("Rank 2");
                return rank = icon2;
            case 3:
                console.log("Rank 3");
                return rank = icon3;;
            default:
                return rank = icon1;
        }
    }

    mudaRank()

    return (
        
        <StyleBoxContainer>
            <StyleLogoBox>
                <StyleDiv>
                    <img className="img-logo"src={logo} alt="logo"/>
                </StyleDiv>
            </StyleLogoBox>
            <StyleMainBox>
                <StyleDiv>
                    <h2>Cadastro Completo</h2>
                </StyleDiv>
                <StyleDivCadastro>
                    <div>
                        <p>NOME COMPLETO:</p>
                        <StyleInput type="text" placeholder="NOME COMPLETO" value={nomeUsuario} onChange={onChangeNomeUsuario}/>
                        <p>APELIDO:</p>
                        <StyleInput type="text" placeholder="NOME DE USUÁRIO" value={apelido} onChange={onChangeApelido}/>
                        <p>DATA DE NASCIMENTO:</p>
                        <StyleInput type="text" placeholder="NOME DE USUÁRIO" value={dtNascimento} onChange={onChangeDtNascimento}/>
                    </div>
                    <div>
                        <img src={fotoPerfil} alt="foto-perfil" />
                        <input type="file" value={novaFoto} onChange={onChangeFotoPerfil}/>
                        <img src={rank} alt="preenchimento" value ={rank} onChange={onChangeRank}/>
                    </div>
                </StyleDivCadastro>
                <StyleBoxButton>
                    <StyleButton onClick={()=>{props.mudarTela(2)}}>Voltar</StyleButton>
                    <StyleButton onClick={()=>{props.mudarTela(4)}}>Concluir</StyleButton>
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

export default TelaCadastroCompleto