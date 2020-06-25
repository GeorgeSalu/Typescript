//arrow functions
const somar = function(n1: number, n2: number): number {
  return n1 + n2
}

console.log(somar(2,2))

const subtrair = (n1: number, n2: number) => n1 - n2

const subtrair2 = (n1: number, n2: number): number => {
  return n1 - n2
}

console.log(subtrair(2,3))
console.log(subtrair2(2,3))