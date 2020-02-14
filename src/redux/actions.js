import { projectsService, authorService } from '../service';

import {
  PROJECTS_FETCH_START,
  PROJECTS_FETCH_SUCCESS,
  PROJECTS_FETCH_ERROR,
  AUTHOR_FETCH_START,
  AUTHOR_FETCH_SUCCESS,
  AUTHOR_FETCH_ERROR
} from './actionTypes';

export const fetchProjects = () => {
  return async dispatch => {
    dispatch({ type: PROJECTS_FETCH_START });
    try {
      const { data } = await projectsService.get();
      dispatch({ type: PROJECTS_FETCH_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PROJECTS_FETCH_ERROR, payload: error });
    }
  };
};

export const fetchAuthor = () => {
  return async dispatch => {
    dispatch({ type: AUTHOR_FETCH_START });
    try {
      const { data } = await authorService.get();
      dispatch({ type: AUTHOR_FETCH_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: AUTHOR_FETCH_ERROR, payload: error });
    }
  };
};
