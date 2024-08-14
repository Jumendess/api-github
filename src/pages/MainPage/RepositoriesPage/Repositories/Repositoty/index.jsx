import React from 'react'
import { Container, Name, Description, Footer, Lang, Link } from './styles'

function Repository() {
  return (
    <Container color="#f37272">
      <Name>Repositorio Name</Name>
      <Description>Repositorio descrição</Description>
      <Footer color="#f37272">
        <Lang>Repositirio Linguagem</Lang>
        <Link href= "http://google.com">Ver</Link>
      </Footer>
    </Container>
  )
}

export default Repository
