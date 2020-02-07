import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import { TProjectItemProps } from '../../types';
import { Button } from '../Button';

const StyledFeaturedProjectItem = styled.div`
  margin-bottom: 32px;

  h3,
  h4 {
    color: #778492;
  }

  h4 {
    font-weight: normal;
  }

  p {
    font-family: Arial, sans-serif;
    display: inline-block;
  }

  img {
    width: 100%;
    height: auto;
    display: inline-block;
  }

  a {
    text-decoration: none;
    margin: 16px 0px;
    &:not(.btn) {
      color: #2d844e;
    }
  }

  div.link-container {
    margin: 16px 0px;
  }

  margin-bottom: 64px;

  h3,
  h4 {
    text-align: center;
  }

  div.grid {
    grid-template-columns: 1fr;
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  div.link-container {
    text-align: center;
  }
`;

const FeaturedProjectItem = ({ project }) => (
  <StyledFeaturedProjectItem>
    <h3>{project.title}</h3>
    {project.subtitle && <h4>{project.subtitle}</h4>}

    <img
      src={`${process.env.PUBLIC_URL}/img/${project.picture}`}
      alt="Project"
    />
    <p>{project.description}</p>

    <div className="link-container">
      <Button secondary as="a" href={project.url}>
        <FontAwesomeIcon icon={faThumbsUp} /> Back my project
      </Button>
    </div>
  </StyledFeaturedProjectItem>
);

FeaturedProjectItem.propTypes = TProjectItemProps;

export default FeaturedProjectItem;
