import React from 'react';

// Components global
import Header from '../../components/Header';

import {
  Container,
  Content,
  Information,
  PlatformInfo,
  Notifications,
  Form,
  TextBox,
  TextBoxContainer
} from './styles';

const Home = () => (
  <Container>
    <Header />
    <Content>
      <Information>
        <strong>DASHBOARD</strong>
        <small>GERENCIAR TOCKET DE SUPORTE</small>
        <Form onSubmit={() => {}}>
          <input type="text" name="email" placeholder="email@example.com"/>
          <input type="text" name="phone" placeholder="(11) 11111-1111" />
          <button type="button">Buscar usuário</button>
        </Form>
        <TextBoxContainer>
          <TextBox>
            <strong>Nome</strong>
            <small>Mauricio Lucas</small>
          </TextBox>
          <TextBox>
            <strong>Email</strong>
            <small>mauricio.nq@hotmail.com</small>
          </TextBox>
          <TextBox>
            <strong>Telefone</strong>
            <small>(11) 91111-1111</small>
          </TextBox>
        </TextBoxContainer>
      </Information>
      <PlatformInfo />
      <Notifications />
    </Content>
  </Container>
);

export default Home;
