import React, { useContext, useEffect, useState } from "react";
import { generateCarList } from "../ultils/generateCarData";
import { generateUserLogged } from "../ultils/generateLoggedUserData";
import { generateRandomEmpolyees } from "../ultils/generateRandomEmployees";

interface UserLoggedType {
  message: string,
  token: string,
  totalVehiclesLoggedUser: number,
  totalVehicles: number,
  totalEmployees: number,
  user: UserDataType,
}

interface Vehicles {
  brand: string,
  model: string,
  yer: number,
  km: number,
  color: string,
  status: string,
  chassi: string,
  value: number
}

interface UserDataType {
  name: string,
  email: string,
  cpf: string,
  salary: number,
  bio: string,
  vehicles: Vehicles[]
}

interface EmployeesType {
  name: string,
  email: string,
  cpf: string,
  salary: number,
  bio: string,
}

interface  AuthContextType  {
  userLogged: UserLoggedType | undefined;
  signIn: (newUserName: string, callback: VoidFunction) => void;
  signOut: () => void;
  loading: boolean;
  carList: Vehicles[];
  randomEmployeesList: EmployeesType[];
}

const AuthContext = React.createContext<AuthContextType>(null!!)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [ userLogged, setUserLogged ] = useState<UserLoggedType>()
  const [ loading, setLoading ] = useState(true)

  const [carList, setCarList] = useState<Vehicles[]>([])
  const [randomEmployeesList, setRandomEmployeesList] = useState<EmployeesType[]>([])

  useEffect(() => {
    
    const recoveredUser = localStorage.getItem("user")
    const recoveredCarList = localStorage.getItem("carList")
    const recoveredRandomEmployeesList = localStorage.getItem("randomEmployeesList")
    
    if(recoveredCarList && recoveredUser && recoveredRandomEmployeesList) {
      setCarList(JSON.parse(recoveredCarList))
      setRandomEmployeesList(JSON.parse(recoveredRandomEmployeesList))
      setUserLogged(JSON.parse(recoveredUser))
    } else {   
      const randomCars = generateCarList()
      const randomEmployees = generateRandomEmpolyees()
      setCarList([...randomCars])
      setRandomEmployeesList([...randomEmployees])
    }


    // A lista de carros e de funcionários estão sendo gerados nesse contexto
    // pra facilitar o compartilhamento dos mesmos dados entre os componentes, 
    // e também porque o objeto que corresponde ao usuário logado, precisa dessas
    // informações, no mundo real esses dados deveriam vim de uma API e n faria sentido 
    // serem chamados nesse contexto

    setLoading(false)

  }, [ signIn ])
  
  async function signIn (userName: string, callback: VoidFunction) {
    const totalEmployees = randomEmployeesList.length

    const user = generateUserLogged({ userName, carList, totalEmployees })
    
    localStorage.setItem("user", JSON.stringify(user))
    localStorage.setItem("carList", JSON.stringify(carList))
    localStorage.setItem("randomEmployeesList", JSON.stringify(randomEmployeesList))
    
    
    setUserLogged(user)
    setLoading(false)
    callback()
  }

  function signOut() {
    localStorage.removeItem("user")
    localStorage.removeItem("carList")
    localStorage.removeItem("randomEmployeesList")

    setUserLogged(undefined)
    setCarList([])
    setRandomEmployeesList([])
  }

  return <AuthContext.Provider value={{ userLogged, loading ,  signIn, signOut, carList, randomEmployeesList}}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext)
}



