const saudacao = () => console.log('Ola')
saudacao()

const falarCom = (pessoa: string) => console.log('Ola '+pessoa)
falarCom('joao')

//this
function normalComThis() {
  console.log(this)
}

//normalComThis()
const arrowComThis = () => console.log(this)
arrowComThis()