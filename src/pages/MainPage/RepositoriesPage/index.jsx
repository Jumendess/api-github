import React from 'react'
import Profile from './Profile';
import Filter from './Filter';
import { Container, Sidebar, Main } from './styles';


function ReposotoriesPage() {
  return (
    <Container>
      <Sidebar>
        <Profile />
        <Filter />
      </Sidebar>
      <Main>
        Main
      </Main>
    </Container>

  )
}

export default ReposotoriesPage
