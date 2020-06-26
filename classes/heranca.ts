class Ferrari extends Carro {

  constructor(modelo: string, velocidadeMaxima: number) {
    super('ferrari', modelo, velocidadeMaxima);
  }

  public acelerar(): number {
    return this.alterarVelocidade(20)
  }

  public frear(): number {
    return this.alterarVelocidade(-15)
  }

}

const f40 = new Ferrari('ferrari', 332)
console.log(f40.acelerar())