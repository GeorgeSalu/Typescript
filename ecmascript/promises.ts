function esperar3s(callback: (dado: string) => void) {
  setTimeout(() => {
    return '3s depois...'
  }, 3000)
}

esperar3s(function(resultado: string){
  console.log(resultado)
}) 

function esperar3sPromise() {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      return '3s depois...'
    }, 3000)
  })
}

esperar3sPromise()
  .then(dado => console.log(dado))

fetch('https://swapi.co/api/people/1')
  .then(res => res.json())
  .then(personagens => personagens.films)
  .then(films => fetch(films[0]))
  .then(resFilm => resFilm.json())
  .then(filme => console.log(filme.title))