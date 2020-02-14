import { combineReducers } from 'redux';
import projects from './projects';
import author from './author';

export default combineReducers({ author, projects });
