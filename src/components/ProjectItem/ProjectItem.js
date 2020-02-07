import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import { TProjectItemProps } from '../../types';

const StyledProjectItem = styled.div`
  margin: 48px 0px;

  div.grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    img {
      width: 100%;
      height: auto;
      display: inline-block;
    }

    div.description {
      padding: 0px 16px;

      h3 {
        margin: 0px;
        color: #778492;
      }

      p {
        font-family: Arial, sans-serif;
        display: inline-block;
      }
    }
  }

  a {
    text-decoration: none;
    margin: 16px 0px;
    &:not(.btn) {
      color: #2d844e;
    }
  }
`;

const ProjectItem = ({ project }) => (
  <StyledProjectItem>
    <div className="grid">
      <img
        src={`${process.env.PUBLIC_URL}/img/${project.picture}`}
        alt="Project"
      />
      <div className="description">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.url}>
          <FontAwesomeIcon icon={faExternalLinkAlt} /> Find out more
        </a>
      </div>
    </div>
  </StyledProjectItem>
);

ProjectItem.propTypes = TProjectItemProps;

export default ProjectItem;
