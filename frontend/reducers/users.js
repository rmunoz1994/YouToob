import { RECEIVE_ALL_USERS, RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_VIDEOS, RECEIVE_VIDEO, CLEAR_VIDEOS } from "../actions/video_actions";
import merge from 'lodash/merge';
import { RECEIVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session";
import { RECEIVE_CHANNEL } from "../actions/channel_actions";


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
        case RECEIVE_CHANNEL:
        case RECEIVE_COMMENT:
            return merge({}, state, {[action.user.id]: action.user});
        default:
            return state;
    }
};

export default usersReducer;