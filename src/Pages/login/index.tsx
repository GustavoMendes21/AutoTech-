import { Container, Content, LoginPage, FormLogin, BackgroundHome } from "./styles";
import logo from '../../assets/AutoTechLogo.svg'
import { useState } from "react";
import { useAuth } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";

export function Login() {

  const [ userName, setUserName ] = useState("")

  const { signIn } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault()
    signIn(userName, () => {
      navigate("/")
    })
  }

  return (
    <LoginPage>
      <Container>
        <Content>
        <img src={logo} alt="Logo autoluby" />
          <div>
            <div>
              <h1>Bem vindo à AutoTech</h1>
              <p>Faça login para acessar sua conta</p>
            </div>

            <FormLogin onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="input-name">Nome de usúario</label>
                <input id="input-name" type="text" required placeholder="Digite seu nome..." onChange={(event) => setUserName(event.target.value)} pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$" />
              </div>
              <button type="submit">Entrar</button>
            </FormLogin>
          </div>

        </Content>
      </Container>
      <BackgroundHome/>
    </LoginPage>
  )
}