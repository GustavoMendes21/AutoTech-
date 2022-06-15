import { faker } from "@faker-js/faker";
import { generate as GenerateRandomCPF } from "gerador-validador-cpf";
import { generateRandomNumber } from "./generateRandomNumber";


export function generateRandomEmpolyees() {
  const randomCPF = GenerateRandomCPF()
  const randomEmployees = []
  const numberRandom = generateRandomNumber(0, 20)


  for(let i = 0; i < numberRandom; i++) {
    const employee = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      cpf: randomCPF,
      salary: Number(faker.finance.amount()),
      bio: "Gosto muito de contribuir com essa empresa",
    }

    randomEmployees.push(employee)
  }

  return randomEmployees
}