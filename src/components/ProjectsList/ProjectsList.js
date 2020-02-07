import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProjectItem, FeaturedProjectItem } from '../ProjectItem';

import {
  getProjectsList,
  getProjectsLoadingState,
  getProjectsErrorState
} from '../../redux/selectors';
import { fetchProjects } from '../../redux/actions';
import { Section } from '../Section';

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
      <FeaturedProjectItem project={mainProject} />
      <hr />
      {otherProjects.map(project => (
        <ProjectItem project={project} />
      ))}
    </Section>
  );
};

export default ProjectsList;
