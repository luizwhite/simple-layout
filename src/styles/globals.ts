import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

export default styled.createGlobalStyle`
  :root {
    --primary: #0062ff;
    --secondary: #2f3136;

    --gray-000: #f4f4f4;
    --gray-050: #f1f1f1;
    --gray-500: #828282;
    --gray-700: #4f4f4f;
    --gray-800: #333333;

    --blue-forma: #0062ff;
    --blue-400: #005ea4;

    --yellow: #ffad01;
    --green: #219653;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: calc(calc(15 / 16) * 100%);
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: calc(calc(14 / 16) * 100%);
    }
  }

  body {
    background-color: var(--gray-000);
    color: var(--secondary);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body,
  input,
  select,
  button,
  textarea {
    font: 400 1rem 'Roboto', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
    border: none;
  }

  strong {
    display: block;
  }

  input {
    &[type='number'] {
      -moz-appearance: textfield;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  main {
    max-width: 1280px;
    margin: 87px auto 0;
    padding: 24px 32px;

    section + section {
      margin-top: 24px;
    }
  }
`;
