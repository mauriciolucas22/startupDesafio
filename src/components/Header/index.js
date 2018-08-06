import React from 'react';

import { Container, Content } from './styles';

const Header = () => (
  <Container>
    <Content>
      <img src="https://avatars0.githubusercontent.com/u/20993303?s=400&v=4" alt="avatar" />
      <button onClick={() => {}}>home</button>
      <button onClick={() => {}}>usuarios</button>
      <button onClick={() => {}}>produtos</button>
      <button onClick={() => {}}>relatorios</button>
      <button onClick={() => {}}>status da plataforma</button>
    </Content>
    <i className="fa fa-cogs"></i>
  </Container>
);

export default Header;
