import { faker } from "@faker-js/faker";
import { generate as GenerateRandomCPF } from "gerador-validador-cpf";

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

export function generateUserData(userName: string, carListUserLogged: Vehicles[]) {
  const randomCPF = GenerateRandomCPF()
  
  return {
    name: userName,
    email: faker.internet.email(),
    cpf: randomCPF,
    salary: Number(faker.finance.amount()),
    bio: "Amo trabalhar nessa empresa",
    vehicles: carListUserLogged
  }
}