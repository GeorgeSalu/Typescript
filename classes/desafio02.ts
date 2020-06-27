// Exercício 2 - Herança
/*var objeto2D = {
  base: 0,
  altura: 0
}*/

abstract class objeto2D {
  public base: number = 0
  public altura: number = 0
}

class Retangulo extends objeto2D {
  area(): number {
    return this.base * this.altura
  }
}

const retangulo = new Retangulo
retangulo.base = 5
retangulo.altura = 7
console.log(retangulo)