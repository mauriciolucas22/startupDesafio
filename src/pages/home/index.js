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
  TextBoxContainer,
  Control,
} from './styles';

const Home = () => (
  <Container>
    <Header />
    <Content>
      <Information>
        <strong>DASHBOARD</strong>
        <small>GERENCIAR TOCKET DE SUPORTE</small>
        <Form onSubmit={() => {}} >
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

        <Control>
          <strong>Controle</strong>

          <form onSubmit={() => {}}>
            <input type="text" name="cep" placeholder="ex: 00000-000"/>
            <div>
            <button type="button" onClick={() => {}} id="open">ABRIR</button>
            <button type="button" onClick={() => {}} id="close">FECHAR</button>
            </div>
          </form>
        </Control>
      </Information>
      <PlatformInfo />
      <Notifications />
    </Content>
  </Container>
);

export default Home;
