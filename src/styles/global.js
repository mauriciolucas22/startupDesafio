import { injectGlobal } from 'styled-components';

import 'font-awesome/css/font-awesome.css';

import { colors } from './index';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: ${colors.primary};
    font-family: 'Montserrat', sans-serif;
    color: #fff;
  }

  button {
    cursor: pointer;
  }
`;
