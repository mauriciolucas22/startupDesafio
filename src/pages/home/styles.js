import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  background: #eee;
  color: #000;
  padding: 20px;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 18px;
    font-family: sans-serif;
  }

  small {
    font-size: 15px;
    margin-top: 20px;
    font-family: sans-serif;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;

  input {
    padding: 10px;
    height: 40px;
    border: 1px solid #878686;
    margin: 10px 10px 10px 10px;
    color: #000;
  }

  button {
    border: 0;
    padding: 5px;
    background: #878686;
    color: #fff;
    width: 120px;
    height: 45px;
    margin: 10px 10px 10px 10px;
    border-radius: 4px;
  }
`;

export const TextBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  height: 90px;
  width: 200px;
  margin: 10px 10px 10px 10px;
  border: 1px solid #878686;
  border-radius: 4px;
  background: #fff;

  strong {
    font-size: 15px;
    font-family: Arial;
    margin: 10px 10px 10px 10px;
  }

  small {
    font-size: 13px;
    font-family: Arial;
    margin: 10px 10px 10px 10px;
  }
`;

export const PlatformInfo = styled.div``;

export const Notifications = styled.div``;
