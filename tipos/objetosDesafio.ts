/**
 * criar um objeto funcionario com:
 *  - Array de strings com os nomes dos supervisores
 *  - função de bater ponto que recebe a hora (numero) e retorna uma string
 *    -> ponto normal (<= 18)
 *    -> fora do horario (> 8)
 */

let funcionario: {
  supervisores: string[],
  baterPonto: (horas: number) => string
} = {
  supervisores: ['Ana', 'Fernando'],
  baterPonto(horario: number): string {
    if(horario <= 8) {
      return 'Ponto normal'
    } else {
      return 'Fora do horario'
    }
  }
}


console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(10))