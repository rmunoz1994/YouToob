import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session';
import { RECEIVE_VIDEO } from '../actions/video_actions';
import { RECEIVE_LIKE } from '../actions/like_actions';


const likesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LIKE:
        case REMOVE_LIKE:
        case RECEIVE_VIDEO:
        case RECEIVE_CURRENT_USER:
            return {};
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default likesReducer;