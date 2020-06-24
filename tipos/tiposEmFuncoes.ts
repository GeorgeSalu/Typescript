// funcoes
let nome: string = 'joao'

function retornaMeuNome(): string {
  return nome
}

console.log(retornaMeuNome())

function digaOi(): void {
  console.log('oi')
}

digaOi()

function multiplicar(numA: number, numB: number): number {
  return numA * numB
}

console.log(multiplicar(2,1.2))