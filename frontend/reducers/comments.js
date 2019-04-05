import { RECEIVE_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO, CLEAR_VIDEOS } from "../actions/video_actions";
import  { RECEIVE_COMMENT } from "../actions/comment_actions";
import merge from 'lodash/merge';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_VIDEO:
            if (action.comments) {
                return action.comments;
            }
            return {}
        case RECEIVE_COMMENT:
            const newComment = { [action.comment.id]: action.comment };
            return merge({}, state, newComment);
        case CLEAR_VIDEOS:
            return {};
        default:
            return state;
        // case RECEIVE_COMMENT:
        //     const newVideo = { [action.video.id]: action.video };
        //     return merge({}, state, newVideo);
        // case REMOVE_VIDEO:
        //     const newState = merge({}, state);
        //     delete newState[action.video.id];
        //     return newState;
    }
};

export default commentsReducer;