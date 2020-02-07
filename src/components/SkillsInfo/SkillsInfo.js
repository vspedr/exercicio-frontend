import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import SkillItem from './SkillItem';

import { Section } from '../Section';

const StyledSkillsInfo = styled(Section)`
  a {
    display: inline-block;
    text-decoration: none;
    margin: 16px 0px;
    &:not(.btn) {
      color: #2d844e;
    }
  }
`;

const SkillsInfo = () => (
  <StyledSkillsInfo>
    <h2>Skills</h2>
    <p>
      Intro about your skills goes here. Keep the list lean and only show your
      primary skillset. You can always provide a link to your Linkedin or
      Coderwall profile so people can get more info there.
    </p>
    <SkillItem name="Python & Django" level="Expert" progress="95%" />
    <SkillItem name="Javasctipt & jQuery" level="Expert" progress="95%" />
    <SkillItem name="HTML5, CSS3, SASS, LESS" level="Expert" progress="95%" />
    <SkillItem name="Ruby on Rails" level="Pro" progress="80%" />
    <a href="https://coderwall.com/">
      <FontAwesomeIcon icon={faExternalLinkAlt} /> More on Coderwall
    </a>
  </StyledSkillsInfo>
);

export default SkillsInfo;
