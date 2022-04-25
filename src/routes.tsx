import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"

import { Home } from "./Pages/home"
import { Login } from "./Pages/login"

import { AuthProvider, useAuth } from './contexts/auth' 
import { Menu } from "./components/Menu"
import { TableCars } from "./components/TableCars"
import { TableEmployee } from "./components/TableEmployee"

export function AppRoutes() {
  function RequireAuth({ children }: { children: JSX.Element }) {
    const { userLogged, loading } = useAuth()

    if(loading) {
      return <div className="loading">Carregando informações...</div>
    }

    if(!userLogged) {
      return <Navigate to="/login"/>
    }
    
    
    return children
  }
  
  
  return(
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>

          <Route 
            path="/" 
            element={
            <RequireAuth>
              <Home>
                <Menu/>
              </Home>
            </RequireAuth>}>
          </Route>

          <Route 
            path="/meus-veiculos" 
            element={
            <RequireAuth>
              <Home>
                <TableCars tableData="userVehicles"/>
              </Home>
            </RequireAuth>}>
          </Route>

          <Route 
            path="/veiculos" 
            element={
            <RequireAuth>
              <Home>
                <TableCars tableData="allVehicles"/>
              </Home>
            </RequireAuth>}>
          </Route>

          <Route 
            path="/funcionarios" 
            element={
            <RequireAuth>
              <Home>
              <TableEmployee/>
              </Home>
            </RequireAuth>}>
          </Route>

        </Routes>

      </Router>
    </AuthProvider>
  )
}