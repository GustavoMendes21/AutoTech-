import { Container, Content, LoginPage, FormLogin, BackgroundHome } from "./styles";
import logo from '../../assets/logo.svg'
import { useState } from "react";
import { useAuth } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";

export function Login() {

  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const auth = useAuth()
  const navigate = useNavigate()
  
  function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault()

    auth.signIn({email, password}, () => {
      navigate("/")
    })
  }

  return (
    <LoginPage>
      <Container>
        <img src={logo} alt="Logo autoluby" />
        <Content>
          <div>
            <h1>Bem vindo à AutoLuby</h1>
            <p>Faça login para acessar sua conta</p>

            <FormLogin onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="input-email">Endereço de email</label>
                <input id="input-email" placeholder="@mail.com" type="email" onChange={(event) => setEmail(event.target.value)}/>
              </div>

              <div className="field">
                <label htmlFor="input-password">Senha</label>
                <input id="input-password" placeholder="senha" type="password" onChange={(event) => setPassword(event.target.value)}/>
              </div>

              <div className="options-password">
                <label htmlFor="remember-password">
                  <input type="checkbox" name="remember-password" id="remember-password" />
                  <span></span>
                  <p>Lembrar senha</p>
                </label>

                  <a href="#">Esqueceu a senha?</a>
              </div>


              <button type="submit">Entrar</button>
            </FormLogin>

            <span>
              Ainda não tem uma conta?
              <a href="#">Criar uma conta</a>
            </span>
          </div>

        </Content>
      </Container>
      <BackgroundHome/>
    </LoginPage>
  )
}