import React from 'react';
import { styled } from 'styled-components';
import Header from './components/Header';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 740px;
  height: 100vh;
  margin: 0 auto;
  background: var(--bg-smoke);
  border: 1px solid var(--bg-smoke);
`;

function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
}

export default App;
