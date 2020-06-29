//@logarClasse
//@logarClasseSe(true)
@decorator('abc',111)
class Eletrodomestico {
  constructor() {
    console.log('novo ....')
  }
}

function logarClasse(construtor: Function) {
  console.log(construtor)
}

new Eletrodomestico()

function logarClasseSe(valor: boolean) {
  return valor ? logarClasse : null
}

function decorator(a: string, b: number) {
  return function(contrutor: Function): void {
    console.log(a + ''+ b)
  }
}