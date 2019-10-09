import { combineReducers } from 'redux';
import videosReducer from './videos';
import usersReducer from './users';
import commentsReducer from './comments';
import likesReducer from './likes';
import channelsReducer from './channels';
import subscriptionsReducer from './subscriptions';

export default combineReducers({
    videos: videosReducer,
    users: usersReducer,
    comments: commentsReducer,
    likes: likesReducer,
    channels: channelsReducer,
    subscriptions: subscriptionsReducer
});