import React from 'react';
import { styled } from 'styled-components';

const StyledWrapper = styled.div`
  display: ${(props) => props.display || 'flex'};
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.padding || '20px 50px'};
  background-color: ${(props) => props.background || 'var(--bg-white)'};
  border-top: ${(props) => props.bordertop || '0'};
  @media (max-width: 570px) {
    padding: ${(props) => props.paddingLessThan570 || '20px 20px'};
  }
`;

function Wrapper(props) {
  return (
    <StyledWrapper {...props} />
  );
}

export default Wrapper;
