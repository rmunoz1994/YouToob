import { RECEIVE_ALL_USERS, RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_VIDEOS, CLEAR_VIDEOS } from "../actions/video_actions";
import merge from 'lodash/merge';


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_VIDEOS:
            return action.users;
        // case RECEIVE_ALL_USERS:
        // case RECEIVE_USER:
        //     const newUser = { [action.user.id]: action.user };
        //     return merge({}, state, newUser);
        case CLEAR_VIDEOS:
            return {};
        default:
            return state;
    }
};

export default usersReducer;