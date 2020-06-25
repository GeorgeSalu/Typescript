//desafio
let contaBancaria = {
  saldo: 3445,
  depositar(valor) {
    this.saldo += valor
  }
}

let correntista = {
  nome: 'ana silva',
  contaBancaria: contaBancaria,
  contatos: ['233434232','22323232']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)