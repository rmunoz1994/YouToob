import { RECEIVE_VIDEOS, RECEIVE_VIDEO, CLEAR_VIDEOS } from "../actions/video_actions";
import merge from 'lodash/merge';
import { RECEIVE_USER } from "../actions/session";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER:
            return action.videos;
        case RECEIVE_VIDEO:
            const newVideo = { [action.video.id]: action.video };
            // const test = {id: "test"};
            // return Object.assign({}, state, newVideo);
            return merge({}, state, newVideo);
        case CLEAR_VIDEOS:
            return {};
        default:
            return state;
    }
};

export default videosReducer;