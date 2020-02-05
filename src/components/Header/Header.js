import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { Container } from '../Container';
import { Profile } from '../Profile';
import { Button } from '../Button';

const StyledHeader = styled.header`
  padding: 30px 0;
  background: #f5f5f5;
  border-top: 10px solid #778492;

  img {
    width: 180px;
    height: 180px;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px) {
    img {
      margin-right: 30px;
    }

    .container {
      flex-direction: row;
      align-content: flex-start;

      .btn {
        align-self: center;
        margin-left: auto;
      }
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <Container>
      <img src={`${process.env.PUBLIC_URL}/img/profile.png`} alt="James Lee" />
      <Profile />
      <Button as="a" href="#" bold>
        <FontAwesomeIcon icon={faPaperPlane} /> Contact me
      </Button>
    </Container>
  </StyledHeader>
);

export default Header;
