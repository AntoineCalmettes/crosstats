import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  .title{
    font-weight: bold !important;
  }

  .sub-title{
    font-weight: medium !important;
  }

  .bg-primary{
    background: ${({ theme }) => theme.bodyPrimary} !important;
  }

  .bg-secondary{
    background: ${({ theme }) => theme.bodySecondary} !important;
  }

  .text-primary{
    color: ${({ theme }) => theme.textPrimary} !important;
  }

  .text-secondary{
    color: ${({ theme }) => theme.textSecondary} !important;
  }

  body {
    background: ${({ theme }) => theme.bodySecondary};
    color: ${({ theme }) => theme.textPrimary};
    height: 100vh;
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
  }
  
  `