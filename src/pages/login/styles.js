import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  img {
    border: 1px solid #fff;
    border-radius: 50%;
    width: 300px;
    height: 300px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 130px;

  strong {
    margin: 10px 10px 10px 0;
    color: #fff;
    font-size: 25px;
    font-weight: bold;
    font-family: 'Khand Semibold';
  }

  small {
    margin: 10px 10px 10px 0;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    font-family: 'Khand Semibold';
  }

  a {
    margin-top: 20px;
    font-size: 15px;
    text-decoration: none;
    color: #fff;

    &:visited {
      text-decoration: none;
      color: #fff;
      font-family: 'Khand Semibold';
    }
  }
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;

  input {
    width: 300px;
    flex: 1;
    height: 55px;
    padding: 20px;
    background: #fff;
    font-size: 12px;
    border: 0;
    margin: 10px 10px 10px 0;
  }

  button {
    margin-top: 10px;
    border: 0;
    width: 90px;
    height: 50px;
    background: #fff;
    border-radius: 3px
  }
`;
