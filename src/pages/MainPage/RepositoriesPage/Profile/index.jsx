import React from 'react'
import {MdGroup, MdLocationCity, MdWork } from 'react-icons/md'

import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles';

function Profile() {
  return (
    <Container>
      <Header>
        <Avatar src='https://avatars.githubusercontent.com/u/101362282?v=4' />
        <Login>Jumendess</Login>
        <Name>Julio Mendes</Name>
      </Header>
      <Inner>
        <Data><MdGroup size={20}/>
        30&nbsp;<i> seguidores</i>&nbsp;&middot;&nbsp;10&nbsp;<i>seguindo </i>

        </Data>
        <Data><MdWork size={20}/>Adin</Data>
        <Data><MdLocationCity size={20}/>São PAulo- SP</Data>


      </Inner>
    </Container>
  )
}

export default Profile
