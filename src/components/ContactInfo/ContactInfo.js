import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faEnvelope,
  faLink
} from '@fortawesome/free-solid-svg-icons';

import { Section } from '../Section';

import {
  getAuthorData,
  getAuthorLoadingState,
  getAuthorErrorState
} from '../../redux/selectors';
import { fetchAuthor } from '../../redux/actions';

const StyledContactInfo = styled.ul`
  list-style-type: none;
  padding: 0px;

  li {
    &:not(:first-child) {
      margin-top: 16px;
    }
    &:not(:last-child) {
      margin-bottom: 16px;
    }

    svg {
      margin-right: 16px;
      color: #ccd1d6;
    }

    address {
      display: inline;
      font-style: normal;
    }

    a {
      text-decoration: none;
      color: #2d844e;
    }
  }
`;

const ContactInfo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAuthor());
  }, [dispatch]);

  const author = useSelector(getAuthorData);
  const loading = useSelector(getAuthorLoadingState);
  const error = useSelector(getAuthorErrorState);

  if (error || loading || !author) return null;
  return (
    <Section as="aside">
      <StyledContactInfo>
        <li>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <address>{author.location}</address>
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} />
          <a href={`mailto:${author.email}`}>{author.email}</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faLink} />
          <a href={author.website}>{author.website}</a>
        </li>
      </StyledContactInfo>
    </Section>
  );
};

export default ContactInfo;
