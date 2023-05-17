import { styled } from 'styled-components';

const Container = styled.div`
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

export default Container;
