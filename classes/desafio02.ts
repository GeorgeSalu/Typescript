// Exercício 2 - Herança
var objeto2D = {
  base: 0,
  altura: 0
}

var retangulo = Object.create(objeto2D)
retangulo.base = 5
retangulo.altura = 7
retangulo.area = function() {
  return this.base * this.altura
}
console.log(retangulo.area())