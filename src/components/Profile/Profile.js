import React from 'react';
import PropTypes from 'prop-types';
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

const Profile = ({ name, title, socialNetworks }) => (
  <StyledProfile>
    <h1>{name}</h1>
    <h2>{title}</h2>
    <ul>
      {socialNetworks.map(n => (
        <SocialIcon socialNetwork={n} href="#" />
      ))}
    </ul>
  </StyledProfile>
);

Profile.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  socialNetworks: PropTypes.arrayOf(PropTypes.string)
};

Profile.defaultProps = {
  name: '',
  title: '',
  socialNetworks: []
};

export default Profile;
