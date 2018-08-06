import styled from 'styled-components';

import { colors } from '../../styles';

export const Container = styled.div`
  height: 90px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
  background: ${colors.primary};

  button {
    border: 0;
    background: transparent;

    i {
      font-size: 40px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;

  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }

  button {
    border: 0;
    color: #fff;
    margin: 20px 20px 20px 0;
    font-size: 20px;
    font-weight: bold;
    margin-left: 30px;

    &:hover {
      color: #e5f2e5;
    }
  }
`;
