import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

   @font-face {
    font-family: 'Bebas Neue';
    src: url('../../public/fonts/BebasNeue-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'PT Sans';
    src: url('../../public/fonts/PTSans-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Protest Strike';
    src: url('../../public/fonts/ProtestStrike-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  :root {
    --color-bg: #E5E5E5;
    --color-white: #ffffff;
    --color-dark: #42567A;
    --color-blue: #3877EE;
    --color-dark-blue: #5D5FEF;
    --color-pink: #EF5DA8;
    --color-grey: rgba(66,86,122,0.2);
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'PT Sans', sans-serif;
    background-color: var(--color-bg);
    color: var(--color-dark);
    min-height: 100vh;
    min-width: 100vw;
  }

  #root {
    min-height: 100vh;
  }

  .swiper {
    overflow: visible;
  }
`;
