import { faker } from "@faker-js/faker"
import { generateRandomNumber } from "./generateRandomNumber"

interface Vehicle {
  brand: string,
  model: string,
  yer: number,
  km: number,
  color: string,
  status: string,
  chassi: string,
  value: number
}

const modelsCar = [
  {
    brand: "Chevrolet",
    model: "Onix"
  },
  {
    brand: "Chevrolet",
    model: "Spin"
  },
  {
    brand: "Chevrolet",
    model: "Celta"
  },
  {
    brand: "Chevrolet",
    model: "Classic"
  },
  {
    brand: "Chevrolet",
    model: "Corsa"
  },
  {
    brand: "Chevrolet",
    model: "Astra"
  },
  {
    brand: "Chevrolet",
    model: "Cruze"
  },
  {
    brand: "Volkswagem",
    model: "Polo"
  },
  {
    brand: "Volkswagem",
    model: "Golf"
  },
  {
    brand: "Volkswagem",
    model: "Gol"
  },
  {
    brand: "Volkswagem",
    model: "T-Cross"
  },
  {
    brand: "Volkswagem",
    model: "Tiguan"
  },
  {
    brand: "Volkswagem",
    model: "Jetta"
  },
  {
    brand: "Fiat",
    model: "Uno"
  },
  {
    brand: "Fiat",
    model: "Argo"
  },
  {
    brand: "Fiat",
    model: "Linea"
  },
  {
    brand: "Fiat",
    model: "Punto"
  },
  {
    brand: "Fiat",
    model: "Siena"
  },
  {
    brand: "Ford",
    model: "Ka"
  },
  {
    brand: "Ford",
    model: "Fiesta"
  },
  {
    brand: "Ford",
    model: "Ecosport"
  },
  {
    brand: "Toyota",
    model: "Corolla"
  },
  {
    brand: "Honda",
    model: "Civic"
  },
]

const colorsAvailable = [
  "preto",
  "branco",
  "vermelho",
  "cinza",
  "azul",
  "prata"
]

const statusCar = ["Disponível", "Vendido"]

function generateCarData(): Vehicle {
  const indexRandom = generateRandomNumber(0, modelsCar.length)
  const modelCar = modelsCar[indexRandom]

  return {
    brand: modelCar.brand,
    model: modelCar.model,
    yer: faker.date.past().getFullYear(),
    km: generateRandomNumber(0, 100000),
    color: colorsAvailable[generateRandomNumber(0, colorsAvailable.length)],
    status: statusCar[generateRandomNumber(0,2)],
    chassi: faker.vehicle.vin(),
    value: generateRandomNumber(0, 70000)
  }
}

export function generateCarList() {
  const carList:Vehicle[] = []

  if(carList.length > 0) {
    return carList
  }

  modelsCar.forEach(model => {
    const car = generateCarData()
    carList.push(car)
  })

  return carList
}
