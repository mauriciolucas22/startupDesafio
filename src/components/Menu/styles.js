import styled from 'styled-components';

import { colors } from '../../styles';

export const Container = styled.div`
  height: 90px;
  width: 100%;

  display: flex;
  flex-direction: row;
  padding: 30px;;
  height: 75px;
  background: ${colors.primary};

  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }

  button {
    border: 0;
    color: #fff;
    margin: 20px 20px 20px 0;
    font-size: 15px;
    margin-left: 30px;
  }
`;
