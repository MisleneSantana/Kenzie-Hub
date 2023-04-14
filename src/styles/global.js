import { createGlobalStyle } from "styled-components"; //CSS aplicado em todos os pontos da aplicação

export const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Inter';
    width: 99vw;
    overflow-x: hidden;
    background-color:var(--black);
}

:root {
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    --black: #000000;
    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;
    --white: #FFFFFF;
    --feedback-success: #3FE864;
    --feedback-error: #E83F5B;
  
    /* Fonts */
    --text-12: 0.75rem;
    --text-14: 0.875rem;
    --text-default: 1rem;
    --text-18:1.125rem;
    --text-20: 1.25rem;
    --text-22: 1.375rem;
    --text-24: 1.5rem;
    --text-26: 1.625rem
    --text-32: 2rem;

    /* Border-radius */
    --border-radius: 4px;

    /* Inputs, Buttons */
    --button-width: 8.3544rem;
    --button-height: 3rem;
    --input-width:20.6206rem;
    --input-height: 3rem;
    --card-width:46.375rem;
    --card-height: 3.0456rem;
}

input{
    height: 3rem;
    background-color: var(--grey-2);
    border: 0.0762rem solid var(--grey-2);
    border-radius:var(--border-radius);
    color: var(--grey-1);
    padding: 0 1rem;
    
    :focus{
      border: 0.0762rem solid var(--grey-0);
      color: var(--grey-0);
      font-size: var(--text-default);
      line-height: 1.625rem;
      font-weight:400;
    }
}

button, a, select, input{
    cursor: pointer;
}
`;
