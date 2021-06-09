import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Oswald', sans-serif;
        overflow-x: hidden;
    }
    body {
        overflow-x: hidden;
    }
`