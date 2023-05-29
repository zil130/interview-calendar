import React from 'react';
import { styled } from 'styled-components';
import Wrapper from './commons/Wrapper';
import GridGenerator from './GridGenerator';

const StyledWeekByHours = styled.div`
  background: var(--white);
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

function WeekByHours() {
  return (
    <StyledWeekByHours>
      <Wrapper
        display="block"
        padding="20px 0 0"
        paddinglessthan570="20px 0 0"
      >
        <GridGenerator />
      </Wrapper>
    </StyledWeekByHours>
  );
}

export default WeekByHours;
