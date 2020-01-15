import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  .title{
    font-weight: bold;
  }

  .subTitle{
    font-weight: medium;
  }

  .text-primary{
    color: ${({ theme }) => theme.textPrimary};
  }

  .text-secondary{
    color: ${({ theme }) => theme.textSecondary};
  }

  body {
    background: ${({ theme }) => theme.bodySecondary};
    color: ${({ theme }) => theme.textPrimary};
    height: 100vh;
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
  }`