class Ferrari extends Carro {

  public acelerar(): number {
    return this.alterarVelocidade(20)
  }

  public frear(): number {
    return this.alterarVelocidade(-15)
  }

}

const f40 = new Ferrari('ferrari', 'f40', 332)
console.log(f40.acelerar())