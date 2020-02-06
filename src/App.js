import React from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Column } from './components/Column';
import { Footer } from './components/Footer';
import { GlobalStyle } from './GlobalStyle';

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Main as="main">
      <Column>col1</Column>
      <Column>col2</Column>
    </Main>
    <Footer />
  </>
);
export default App;
