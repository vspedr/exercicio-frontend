import React from 'react';
import { Provider } from 'react-redux';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Column } from './components/Column';
import { Footer } from './components/Footer';
import { Section } from './components/Section';
import { ProjectsList } from './components/ProjectsList';
import { ContactInfo } from './components/ContactInfo';
import { SkillsInfo } from './components/SkillsInfo';
import { GlobalStyle } from './GlobalStyle';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <Main as="main">
        <Column>
          <Section>
            <h2>About me</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Section>
          <ProjectsList />
        </Column>
        <Column>
          <ContactInfo />
          <SkillsInfo />
        </Column>
      </Main>
      <Footer />
    </Provider>
  );
};

export default App;
