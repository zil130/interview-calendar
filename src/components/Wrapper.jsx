import React from 'react';
import { styled } from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: ${(props) => props.bgColor || 'var(--bg-white)'};
`;

function Wrapper(props) {
  return (
    <StyledWrapper {...props} />
  );
}

export default Wrapper;
