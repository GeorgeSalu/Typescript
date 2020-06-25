// alias
type Funcionario = {
  supervisores: string[],
  baterPonto: (horas: number) => string
}

let funcionario1: Funcionario = {
  supervisores: ['Ana', 'Fernando'],
  baterPonto(horario: number): string {
    if(horario <= 8) {
      return 'Ponto normal'
    } else {
      return 'Fora do horario'
    }
  }
}

let funcionario2: Funcionario = {
  supervisores: ['Ana', 'Fernando'],
  baterPonto(horario: number): string {
    if(horario <= 8) {
      return 'Ponto normal'
    } else {
      return 'Fora do horario'
    }
  }
}