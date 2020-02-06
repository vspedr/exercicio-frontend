import axios from 'axios';
import config from '../config';

const ENDPOINT = '/projects';
const get = () => axios.get(`${config.BACKEND_URL}${ENDPOINT}`);

export default { get };
