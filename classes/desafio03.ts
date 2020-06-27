// Exercício 3 - Getters & Setters
/*var estagiario = {
  _primeiroNome: ''
}

Object.defineProperty(estagiario, 'primeiroNome', {
  get: function () {
      return this._primeiroNome
  },
  set: function (valor) {
      if (valor.length >= 3) {
          this._primeiroNome = valor
      } else {
          this._primeiroNome = ''
      }
  },
  enumerable: true,
  configurable: true
})*/
class Estagiario {
  private _primeiroNome: string = ''

  get primeiroNome() {
    return this._primeiroNome
  }

  set primeiroNome(valor) {
    if(valor.length >= 3) {
      this._primeiroNome = valor
    } else {
      this._primeiroNome = ''
    }
  }
}

const estagiario = new Estagiario
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)