import { projectsService } from '../service';
import {
  PROJECTS_FETCH_START,
  PROJECTS_FETCH_SUCCESS,
  PROJECTS_FETCH_ERROR
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
