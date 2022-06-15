export function generateRandomNumber(numberMin: number, numberMax: number) {
  const min = Math.ceil(numberMin)
  const max = Math.floor(numberMax)

  return Math.floor(Math.random() * (max - min)) + min
}