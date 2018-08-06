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
    font-size: 25px;
    font-family: 'Khand Medium';
    color: #666666;
  }

  small {
    font-size: 15px;
    margin-top: 20px;
    font-family: 'Khand Medium';
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
  width: 550px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-left: 20px;

    button {
      border: 0;
      padding: 10px;
      border-radius: 5px;
      height: 40px;
      width: 120px;
      color: #fff;
    }

    #new {
      background: #325b84;
    }

    #edit {
      background: #e59400;
    }
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  height: 90px;
  width: 210px;
  margin: 10px 10px 10px 10px;
  border: 1px solid #878686;
  border-radius: 4px;
  background: #fff;
  min-width: 190px;
  max-width: 200px;

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

export const Control = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  form {
    display: flex;
    flex-direction: column;

    input {
      margin: 5px 5px 5px 0;
      padding: 10px;
      width: 200px;
      height: 45px;
    }

    div {
      display: flex;
      flex-direction: row;
    }

    #input {
      display: flex;
      flex-direction: row;

      small {
        margin: 20px 20px 20px 20px;
        font-family: 'Khand Medium';
      }
    }

    button {
      border: 0;
      border-radius: 5px;
      padding: 5px;
      margin: 10px 10px 10px 0;
      width: 90px;
      height: 35px;
      color: #fff;
    }

    #open {
      background: #329932;
    }

    #close {
      background: #ff4c4c;
    }
  }
`;

export const PlatformInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #404040;
  height: 150px;
  border-radius: 5px;

  i {
    margin-top: 20px;
    font-size: 200px;
    color: #fff;
  }
`;

export const Notifications = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  background: #f7fcab;
  margin-right: 50px;
  height: 300px;
  width: 300px;
  border-radius: 5px;
  border: 1px solid #808080;
`;
