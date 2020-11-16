import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layout/MainLayout';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
import { GlobalContainerStyled } from '../theme/GlobalContainer.styled';

export const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalContainerStyled />
      <MainLayout />
    </BrowserRouter>
  </ThemeProvider>
);
