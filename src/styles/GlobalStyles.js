import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`

    * {
        margin: 0; 
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%; 
        background: var(--corFundoPrincipal); 
    }

    *{
        border: 0;
        outline: 0;
        font-family: 'Barlow', sans-serif;
        font-style: normal;
        font-weight: bold;
    }

    :root {
        --corFundoPrincipal: #080C2D;
        --corSecundaria: #5602CC;
        --corTerciaria: #FF0284;
    }
`;