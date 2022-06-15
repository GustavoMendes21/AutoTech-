import { generateRandomNumber } from "./generateRandomNumber";
import { generateUserData } from "./generateUserData";


interface newUserType {
  userName: string,
  carList: Vehicles[],
  totalEmployees: number
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

export function generateUserLogged({ userName, carList, totalEmployees}: newUserType) {
  const indexRandomSlice = generateRandomNumber(0, (carList.length - 10))
  
  const carListUserLogged = carList.slice(indexRandomSlice, indexRandomSlice + 10)
  
  
  return {
    message: "Autenticação realizada com sucesso",
    token: "AMSIJ981U84U8J23NF",
    totalVehiclesLoggedUser: carListUserLogged.length,
    totalVehicles: carList.length,
    totalEmployees,
    user: generateUserData(userName, carListUserLogged)
  }
}