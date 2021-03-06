import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Form } from './styles';

const Login = () => (
  <Container>
    <img src="https://avatars0.githubusercontent.com/u/20993303?s=400&v=4" alt="avatar" />

    <Content>
      <strong>ACESSO RESTRITO</strong>
      <small>ENTRE COM SUA CONTA ADMIN</small>

      <Form onSubmit={() => {}}>
        <input
          type="text"
          placeholder="email"
          onChange={() => {}}
        />
        <input
          type="text"
          placeholder="senha"
          onChange={() => {}}
        />

        <Link to="/dashboard">
          <button type="submit" onClick={() => { console.log('Jesus loves you!') }}>
            Acessar
          </button>
        </Link>
      </Form>
      <a href="#">ESQUECEU A SENHA?</a>
    </Content>
  </Container>
);

export default Login;
