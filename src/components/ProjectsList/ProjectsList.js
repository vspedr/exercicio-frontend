import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';

import {
  getProjectsList,
  getProjectsLoadingState,
  getProjectsErrorState
} from '../../redux/selectors';
import { fetchProjects } from '../../redux/actions';
import { Section } from '../Section';
import { Button } from '../Button';

const ProjectsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const projects = useSelector(getProjectsList);
  const loading = useSelector(getProjectsLoadingState);
  const error = useSelector(getProjectsErrorState);

  if (error || loading || projects.length === 0) return null;

  const [mainProject, ...otherProjects] = projects;

  return (
    <Section>
      <h2>Latest Projects</h2>
      <h3>{mainProject.title}</h3>
      <h4>{mainProject.subtitle}</h4>
      <img
        src={`${process.env.PUBLIC_URL}/img/${mainProject.picture}`}
        alt="Project"
      />
      <p>{mainProject.description}</p>
      <Button secondary as="a" href={mainProject.url}>
        <FontAwesomeIcon icon={faThumbsUp} /> Back my project
      </Button>

      {otherProjects.map(project => (
        <>
          <hr />
          <h3>{project.title}</h3>
          <img
            src={`${process.env.PUBLIC_URL}/img/${project.picture}`}
            alt="Project"
          />
          <p>{project.description}</p>
          <a href={project.url}>
            <FontAwesomeIcon icon={faExternalLinkAlt} /> Find out more
          </a>
        </>
      ))}
    </Section>
  );
};

export default ProjectsList;
