import React, {Component} from 'react'
import ContadorValor from './ContadorValor'

interface ContadorProps {
  valorInicial?: number
}

export default class Contador extends Component<ContadorProps> {
  render() {
    return (
      <ContadorValor contador={1234} />
    )
  }
}