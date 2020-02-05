import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: #32383e;
  color: #fff;
  padding: 10px 0;
  text-align: center;
  font-size: 10px;
`;

const Footer = () => (
  <StyledFooter>
    Made with{' '}
    <span aria-label="love, coffee and heavy metal" role="img">
      ❤️☕🎸🤘
    </span>{' '}
    by Victor Pedrazzi
  </StyledFooter>
);

export default Footer;
