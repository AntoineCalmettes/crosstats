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

  .sub-title{
    font-weight: medium;
  }

  .bg-primary{
    background: ${({ theme }) => theme.body};
  }

  .bg-secondary{
    background: ${({ theme }) => theme.bodySecondary};
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