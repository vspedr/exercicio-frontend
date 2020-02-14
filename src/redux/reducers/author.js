import {
  AUTHOR_FETCH_START,
  AUTHOR_FETCH_SUCCESS,
  AUTHOR_FETCH_ERROR
} from '../actionTypes';

const initialState = {
  data: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHOR_FETCH_START:
      return { ...initialState, loading: true };
    case AUTHOR_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case AUTHOR_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
