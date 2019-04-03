import { combineReducers } from 'redux';
import session from './session_errors';
import videos from './video_errors';

export default combineReducers({videos, session});