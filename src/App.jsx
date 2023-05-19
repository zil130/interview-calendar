import React from 'react';
import { styled } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Calendar from './components/Calendar';

const AppContainer = styled.div`
  display: grid;
  grid-template-rows: minmax(0, max-content) minmax(0, max-content) 1fr minmax(0, max-content);
  width: 100%;
  max-width: 740px;
  height: 100vh;
  margin: 0 auto;
  background: var(--bg-smoke);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Calendar />
      <div />
      <Footer />
    </AppContainer>
  );
}

export default App;
