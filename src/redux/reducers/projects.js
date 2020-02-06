import {
  PROJECTS_FETCH_START,
  PROJECTS_FETCH_SUCCESS,
  PROJECTS_FETCH_ERROR
} from '../actionTypes';

const initialState = {
  projects: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROJECTS_FETCH_START:
      return { ...initialState, loading: true };
    case PROJECTS_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: action.payload
      };
    case PROJECTS_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
