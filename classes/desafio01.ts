// Exercício 1 - Classe
function Moto(nome) {
  this.nome = nome
  this.velocidade = 0

  this.buzinar = function() {
      console.log('Toooooooooot!')
  }

  this.acelerar= function(delta) {
      this.velocidade = this.velocidade + delta
  }
}

var moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)