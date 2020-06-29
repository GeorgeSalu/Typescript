

function logarClasse(construtor: Function) {
  console.log(construtor)
}

//new Eletrodomestico()

function logarClasseSe(valor: boolean) {
  return valor ? logarClasse : null
}

function decorator(a: string, b: number) {
  return function(contrutor: Function): void {
    console.log(a + ''+ b)
  }
}



type Construtor = { new(...args: any[]) : {}}

function logarObjeto(construtor: Construtor) {
  console.log('carregando ....')
  return class extends construtor {
    constructor(...args: any[] ){
      console.log('antes')
      super(...args)
      console.log('depois')
    }
  }
}

//new Eletrodomestico()

//@logarClasse
//@logarClasseSe(true)
//@decorator('abc',111)
@logarObjeto
@imprimivel
class Eletrodomestico {
  constructor() {
    console.log('novo ....')
  }
}

function imprimivel(construtor: Function) {
  construtor.prototype.imprimir = function() {
    console.log(this)
  }
}

new Eletrodomestico().imprimir()