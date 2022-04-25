import React, { useContext, useEffect, useState } from "react";
import { api,signInRoute } from "../services/api";

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
  yer: string,
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

interface NewUserType {
  email: string,
  password: string
}

interface  AuthContextType  {
  userLogged: UserLoggedType | undefined;
  signIn: (user: NewUserType, callback: VoidFunction) => void;
  signOut: () => void,
  loading: boolean;
}

const AuthContext = React.createContext<AuthContextType>(null!!)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [ userLogged, setUserLogged ] = useState<UserLoggedType>()
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user")
    const recoveredToken = localStorage.getItem("token")

    
    if(recoveredUser && recoveredToken) {
      const token = JSON.parse(recoveredToken)
      setUserLogged(JSON.parse(recoveredUser))
      api.defaults.headers.common['Authorization']  = "Bearer " + token
    }
  
    setLoading(false)
  }, [])
  
  async function signIn (newUser: NewUserType, callback: VoidFunction) {

    const response = await signInRoute(newUser)

    if(response.status === 200) {
      const token = response.data.token
      setUserLogged(response.data)

      localStorage.setItem("user", JSON.stringify(response.data))
      localStorage.setItem("token", JSON.stringify(token))
      api.defaults.headers.common['Authorization']  = `Bearer ${token}`
      callback()
    }
      
  }

  function signOut() {
    setUserLogged(undefined)
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    api.defaults.headers.common['Authorization'] = ""
  }

  return <AuthContext.Provider value={{ userLogged, loading ,  signIn, signOut}}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext)
}



