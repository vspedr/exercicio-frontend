import React from 'react';
import styled from 'styled-components';

const Footer = ({ className }) => (
  <footer className={className}>Made with ❤️☕🎸🤘 by Victor Pedrazzi</footer>
);

export default styled(Footer)`
  background: #32383e;
  color: #fff;
  padding: 10px 0;
  text-align: center;
  font-size: 10px;
`;
