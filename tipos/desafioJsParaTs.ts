//desafio
type ContaBancaria = {
  saldo: number,
  depositar: (valor: number) => void
}

let contaBancaria: ContaBancaria = {
  saldo: 3445,
  depositar(valor: number) {
    this.saldo += valor
  }
}

type Correntista = {
  nome: string,
  contaBancaria: ContaBancaria,
  contatos: string[]
}

let correntista: Correntista = {
  nome: 'ana silva',
  contaBancaria: contaBancaria,
  contatos: ['233434232','22323232']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)