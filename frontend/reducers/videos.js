import { RECEIVE_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO, CLEAR_VIDEOS } from "../actions/video_actions";
import merge from 'lodash/merge';

const videosReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_VIDEOS:
            return action.videos;
        case RECEIVE_VIDEO:
            const newVideo = {[action.video.id]: action.video};
            return merge({}, state, newVideo);
        case REMOVE_VIDEO: 
            const newState = merge({}, state);
            delete newState[action.video.id];
            return newState;
        case CLEAR_VIDEOS:
            return {};
        default: 
            return state;
    }
};

export default videosReducer;