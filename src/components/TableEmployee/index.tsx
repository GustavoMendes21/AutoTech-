import { Container, Table, TableWrapper } from "./styles";

import { BiSearch } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import { getEmployees } from "../../services/api";

interface Employee {
  name: string,
  email: string,
  cpf: string,
  salary: number,
  bio: string
}

export function TableEmployee() {
  const [ employees, setEmployees ] = useState<Employee[]>()

  useEffect(() => {
    (async () => {
      const response = await getEmployees()
      const allEmployees = response.data.employees

      if(allEmployees) {
        setEmployees(allEmployees)
      }


    })()
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
              <th>Nome</th>
              <th>Email</th>
              <th>CPF</th>
              <th>Valor</th>
              <th>Bio</th>
            </tr>
          </thead>

          <tbody>
            {
              employees?.map((employee) => (
              <tr>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.cpf}</td>
                <td>R$ {employee.salary}</td>
                <td>{employee.bio}</td>
              </tr>
              ))
            }
          </tbody>
        </Table>

      </TableWrapper>
    </Container>
  )
}