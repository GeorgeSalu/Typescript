const teste = function(a: number, b: number): boolean {
  return false
}

function multiplicar(numA: number, numB: number): number {
  return numA * numB
}

// tipo função
let calculo: (numeroA: number, numeroB: number) => number  

calculo = multiplicar
console.log(calculo(5,6))