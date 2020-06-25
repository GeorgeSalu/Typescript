//parametros padrão

function contagemRegressiva(inicio: number = 3, fim: number = -5): void {
  console.log(inicio)
  while(inicio > fim) {
    inicio--
    console.log(inicio)
  }
  console.log('fim')
}

contagemRegressiva()
contagemRegressiva(5)