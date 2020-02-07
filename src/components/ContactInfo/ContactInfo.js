import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faEnvelope,
  faLink
} from '@fortawesome/free-solid-svg-icons';

import { Section } from '../Section';

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

const ContactInfo = () => (
  <Section as="aside">
    <StyledContactInfo>
      <li>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <address>San Francisco, US</address>
      </li>
      <li>
        <FontAwesomeIcon icon={faEnvelope} />
        <a href="mailto:jameslee@website.com">jameslee@website.com</a>
      </li>
      <li>
        <FontAwesomeIcon icon={faLink} />
        <a href="http://www.website.com">http://www.website.com</a>
      </li>
    </StyledContactInfo>
  </Section>
);

export default ContactInfo;
