import {createGlobalStyle,css} from 'styled-components';

const GlobalStyle = createGlobalStyle(css`
    *
    {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body
    {
        background #0D1117;
    }
`);

export default GlobalStyle;