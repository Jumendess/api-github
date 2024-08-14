import React from 'react'
import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';
import { Container, Sidebar, Main } from './styles';


function ReposotoriesPage() {
  const user = {
    login: "Jumendess",
    name: "Julio Mendes",
    avatar_url: "https://avatars.githubusercontent.com/u/101362282?v=4",
    followers: 1,
    following: 0,
    company: "Adin",
    blog: "http://google.com",
    location: "São Paulo- SP",
  };
  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>

  )
}

export default ReposotoriesPage
