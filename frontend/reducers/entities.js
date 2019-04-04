import { combineReducers } from 'redux';
import videosReducer from './videos';
import usersReducer from './users';
import commentsReducer from './comments';

export default combineReducers({
    videos: videosReducer,
    users: usersReducer,
    comments: commentsReducer
});