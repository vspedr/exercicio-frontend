import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { Container } from '../Container';
import { Profile } from '../Profile';
import { Button } from '../Button';

import {
  getAuthorData,
  getAuthorLoadingState,
  getAuthorErrorState
} from '../../redux/selectors';
import { fetchAuthor } from '../../redux/actions';

const StyledHeader = styled.header`
  padding: 32px 0;
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
      margin-right: 32px;
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

const Header = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAuthor());
  }, [dispatch]);

  const author = useSelector(getAuthorData);
  const loading = useSelector(getAuthorLoadingState);
  const error = useSelector(getAuthorErrorState);

  if (error || loading || !author) return null;

  return (
    <StyledHeader>
      <Container>
        <img
          src={`${process.env.PUBLIC_URL}/img/profile.png`}
          alt="James Lee"
        />
        <Profile
          name={author.name}
          title={author.title}
          socialNetworks={author.socialNetworks}
        />
        <Button as="a" href="#" bold>
          <FontAwesomeIcon icon={faPaperPlane} /> Contact me
        </Button>
      </Container>
    </StyledHeader>
  );
};

export default Header;
