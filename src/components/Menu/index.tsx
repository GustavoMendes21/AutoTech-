import { Container, MenuItem } from './styles'

import CardImage from '../../assets/cardImage-1.jpg'
import CardImage2 from '../../assets/cardImage-2.jpg'
import CardImage3 from '../../assets/cardImage-3.jpg'
import { useAuth } from '../../contexts/auth'
import { useNavigate } from 'react-router-dom'

export function Menu() {

   const { userLogged } = useAuth()

   const navigate = useNavigate()
  
  return (
    <Container>
      <h1>Bem vindo, <strong>{userLogged?.user.name}</strong></h1>
      <p>Menu</p>
      <section>
        <MenuItem onClick={() => navigate("/meus-veiculos")}>
          <div>
            <h1>Veículos reservados e vendidos</h1>
            <p>Veículos reservados e vendidos por você</p>
            <span>{userLogged?.totalVehiclesLoggedUser} veículos</span>
          </div>

          <img src={CardImage} alt="Veículos reservados e vendidos" />
        </MenuItem>
        <MenuItem onClick={() => navigate("/veiculos")}>
          <div>
            <h1>Listagem de Veículos</h1>
            <p>Listagem de veículos de toda a empresa</p>
            <span>{userLogged?.totalVehicles} veículos</span>
          </div>

          <img src={CardImage2} alt="Veículos reservados e vendidos" />
        </MenuItem>
        <MenuItem onClick={() => navigate("/funcionarios")}>
          <div>
            <h1>Funcionários da empresa</h1>
            <p>Listagem de todos os funcionários da empresa</p>
            <span>{userLogged?.totalEmployees} funcionários</span>
          </div>

          <img src={CardImage3} alt="Veículos reservados e vendidos" />
        </MenuItem>
      </section>
    </Container>
  )
}