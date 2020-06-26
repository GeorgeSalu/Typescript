//somente leitura
class Aviao {
  public readonly modelo: string

  constructor(modelo: string, public readonly prefixo: string) {
    this.modelo = modelo
  }
}

const turboHelice = new Aviao('tu', '22')
//turboHelice.modelo = '12'
console.log(turboHelice)