import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GlobalStyle } from './GlobalStyle';
import { Glob } from 'glob';

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Footer />
  </>
);
export default App;
