import { Container, MenuItem } from './styles'
import CardImage from '../../assets/cardImage1.png'
import { getVehicleList } from '../../services/api'
import { useEffect } from 'react'


export function Menu() {

  useEffect(() => {
    async function getVehicles() {
      const listaDeVeiculos = await getVehicleList()
      console.log(listaDeVeiculos)

    }

    getVehicles()



  }, [])
  
  
  return (
    <Container>
      <h1>Bem vindo, Carlos</h1>
      <p>Menu</p>
      <section>
        <MenuItem>
          <div>
            <h1>Veículos reservados e vendidos</h1>
            <p>Veículos reservados e vendidos por você</p>
            <span>147 veículos</span>
          </div>

          <img src={CardImage} alt="Veículos reservados e vendidos" />
        </MenuItem>
        <MenuItem>
          <div>
            <h1>Veículos reservados e vendidos</h1>
            <p>Veículos reservados e vendidos por você</p>
            <span>147 veículos</span>
          </div>

          <img src={CardImage} alt="Veículos reservados e vendidos" />
        </MenuItem>
        <MenuItem>
          <div>
            <h1>Veículos reservados e vendidos</h1>
            <p>Veículos reservados e vendidos por você</p>
            <span>147 veículos</span>
          </div>

          <img src={CardImage} alt="Veículos reservados e vendidos" />
        </MenuItem>
      </section>
    </Container>
  )
}