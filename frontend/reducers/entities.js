import { combineReducers } from 'redux';
import videosReducer from './videos';
import usersReducer from './users';

export default combineReducers({
    videos: videosReducer,
    users: usersReducer
});