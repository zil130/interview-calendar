import React from 'react';
import Wrapper from './Wrapper';
import Button from './Button';

function Footer() {
  return (
    <Wrapper
      background="var(--bg-smoke)"
      bordertop="2px solid lightgrey"
    >
      <Button>Today</Button>
    </Wrapper>
  );
}

export default Footer;
