import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://autoluby.k8s.luby.me/'

})

export const signInRoute = async (userData: { email: string, password: string }) => {
  return await api.post("/login", userData)
}

export const getVehicleList = async () => {
  return await api.get("https://autoluby.k8s.luby.me/vehicles")
} 