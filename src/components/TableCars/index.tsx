import { Container, Table, TableDataStatus, TableWrapper } from "./styles";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import { getVehicleList } from "../../services/api";

interface Vehicles {
  brand: string,
  model: string,
  yer: string,
  km: number,
  color: string,
  status: string,
  chassi: string,
  value: number
}

interface TableCarsProps {
  tableData: string
}

export function TableCars({ tableData }: TableCarsProps) {

  const { userLogged } = useAuth()
  const [vehicles, setVehicles] = useState<Vehicles[]>([])

  useEffect(() => {
    if(tableData === "userVehicles") {
      const userVehicles = userLogged?.user.vehicles
      
      if(userVehicles) {
        setVehicles(userVehicles)
      }
    } else {
      (async () => {
        const response = await getVehicleList()
        const allVehicles = response.data.vehicles
  
        if(allVehicles) {
          setVehicles(allVehicles)
        }      
      })()
    }

  }, [])
  
  return (
    <Container>
      <h1>Todos os veículos</h1>

      <TableWrapper>
        <div>
          <h1>Listagem geral de veículos</h1>

          <div className="pagination-wrapper">
            <div className="pagination">
              <button className="button-pagination">
                <BsArrowLeft size={20}/>
                Anterior
              </button>
              <span className="number-page selected">1</span>
              <span className="number-page">2</span>
              <span className="number-page">3</span>
              <button className="button-pagination">
                Próxima
                <BsArrowRight size={20}/>
            </button>

            <div className="search-input">
              <input type="text"/>
              <BiSearch size={20}/>
            </div>

            </div>


          </div>
        </div>

        <Table>
          <thead>
            <tr>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Ano</th>
              <th>KM</th>
              <th>Cor</th>
              <th>Status</th>
              <th>Chassi</th>
              <th>Valor</th>
            </tr>
          </thead>

          <tbody>
            {
              vehicles.map(vehicle => (
                <tr key={vehicle.chassi}>
                  <td>{vehicle.brand}</td>
                  <td>{vehicle.model}</td>
                  <td>{vehicle.yer}</td>
                  <td>
                    {
                      vehicle.km.toLocaleString('en-US')
                    }
                  </td>
                  <td>{vehicle.color.toUpperCase()}</td>
                  <td>
                    <TableDataStatus status={vehicle.status}>
                     {vehicle.status}
                    </TableDataStatus>
                  </td>
                  <td>{vehicle.chassi}</td>
                  <td>
                    {
                      new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                      }).format(vehicle.value)
                    }
                  </td>
                </tr>
              ))
            }
          </tbody>
        </Table>

      </TableWrapper>
    </Container>
  )
}