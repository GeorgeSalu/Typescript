class Cliente implements Humano {
  nome: string = ''
  saudar(sobrenome: string) {
    console.log('Ola meu nome é'+this.nome)
  }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Han'
saudarComOla(meuCliente)