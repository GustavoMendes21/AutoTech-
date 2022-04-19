import { Container, Content, LoginPage, FormLogin, BackgroundHome } from "./styles";
import logo from '../../assets/logo.svg'

export function Login() {
  return (
    <LoginPage>
      <Container>
        <img src={logo} alt="Logo autoluby" />
        <Content>
          <div>
            <h1>Bem vindo à AutoLuby</h1>
            <p>Faça login para acessar sua conta</p>

            <FormLogin action="">
              <div className="field">
                <label htmlFor="input-email">Endereço de email</label>
                <input id="input-email" placeholder="@mail.com" type="email" />
              </div>

              <div className="field">
                <label htmlFor="input-password">Senha</label>
                <input id="input-password" placeholder="senha" type="password" />
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