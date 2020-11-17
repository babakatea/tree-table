import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layout/MainLayout';

export const App = () => (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
);
