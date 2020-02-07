import React from 'react';
import styled from 'styled-components';

import { SocialIcon } from '../SocialIcon';

const StyledProfile = styled.div`
  h1 {
    font-size: 38px;
    font-weight: bold;
    margin: 20px 0px;
  }

  h2 {
    color: #778492;
    font-family: Arial, sans-serif;
    font-size: 24px;
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0px;

    li {
      display: inline;
      :not(:last-child) {
        margin-right: 8px;
      }
    }
  }

  @media (max-width: 761px) {
    text-align: center;
  }
`;

const Profile = () => (
  <StyledProfile>
    <h1>James Lee</h1>
    <h2>Web App Developer</h2>
    <ul>
      <li>
        <SocialIcon socialNetwork="twitter" />
      </li>
      <li>
        <SocialIcon socialNetwork="googleplus" />
      </li>
      <li>
        <SocialIcon socialNetwork="linkedin" />
      </li>
      <li>
        <SocialIcon socialNetwork="github" />
      </li>
      <li>
        <SocialIcon socialNetwork="yahoo" />
      </li>
    </ul>
  </StyledProfile>
);

export default Profile;
