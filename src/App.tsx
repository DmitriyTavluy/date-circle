import React from 'react';

import MainLayout from './layouts/MainLayout';
import { GlobalStyle } from './GlobalStyle';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <MainLayout />
  </>
);

export default App;
