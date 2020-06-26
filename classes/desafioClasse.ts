/**
 * Desafio Classe Produto
 * Atributos: nome, preco e desconto
 * criar construtor
 * obs 1 : desconto é opcional (valor padrao 0)
 * obs 2 : criar dois produtos: passando dois e tres params
 */

 class Produto {
   constructor(public nome: string, public preco: number,
      public desconto: number = 0) {}

    /**
     * criar um metodo precoComDesconto
     * quais são os paramentros e o retorno ?
     * alterar método resumo para mostrar o preço com desconto
     */
    precoComDesconto(): number {
      return this.preco * (1 - this.desconto)
    }

    public resumo(): string {
      return `${this.nome} custa R$ ${this.precoComDesconto()} (${this.desconto * 100}% off)`
    }
 }

 const prod1 = new Produto('caneta bic preta', 4.20)
 prod1.desconto = 0.06
 console.log(prod1)
 console.log(prod1.resumo())

 const prod2 = new Produto('Caderno escolar', 18.00, 0.15)
 console.log(prod2)
 console.log(prod2.resumo())