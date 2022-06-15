import { Container, Table, TableWrapper } from "./styles";

import { BiSearch } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";

interface Employee {
  name: string,
  email: string,
  cpf: string,
  salary: number,
  bio: string
}

export function TableEmployee() {
  const { randomEmployeesList } = useAuth()
  const [ employees, setEmployees ] = useState<Employee[]>()

  useEffect(() => {
    setEmployees(randomEmployeesList)
  }, [])

  function formatCpf(v: string){
    v=v.replace(/\D/g,"")                    
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       
    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2") 
    return v
  }

  return (
    <Container>
      <h1>Todos os funcionários</h1>

      <TableWrapper>
        <div>
          <h1>Listagem geral de funcionários</h1>

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
              <tr key={employee.cpf}>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{formatCpf(employee.cpf.toString())}</td>
                <td>
                  {
                      new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                      }).format(employee.salary)
                  }</td>
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