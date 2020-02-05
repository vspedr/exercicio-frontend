import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCodepen,
  faGithub,
  faGooglePlusG,
  faLinkedin,
  faStackOverflow,
  faTwitter,
  faYahoo
} from '@fortawesome/free-brands-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

const socialNetworkMap = {
  codepen: faCodepen,
  linkedin: faLinkedin,
  twitter: faTwitter,
  github: faGithub,
  stackoverflow: faStackOverflow,
  googleplus: faGooglePlusG,
  yahoo: faYahoo
};

const StyledSocialIcon = styled.a`
  font-size: 18px;
  display: inline-block;
  width: 36px;
  height: 36px;
  background-color: #b0b7bf;
  border-radius: 50%;
  text-align: center;

  &:hover {
    opacity: 0.8;
  }

  & svg {
    margin-top: 8px;
  }
`;

const SocialIcon = ({ socialNetwork, href }) => (
  <StyledSocialIcon href={href} target="_blank">
    <FontAwesomeIcon
      icon={socialNetworkMap[socialNetwork] || faShareAlt}
      color="#ffffff"
    />
  </StyledSocialIcon>
);

SocialIcon.propTypes = {
  socialNetwork: PropTypes.string,
  href: PropTypes.string
};

SocialIcon.defaultProps = {
  socialNetwork: '',
  href: '#'
};

export default SocialIcon;
