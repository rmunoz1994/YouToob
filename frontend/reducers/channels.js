import { RECEIVE_CHANNEL } from "../actions/channel_actions";
import { RECEIVE_VIDEOS, RECEIVE_VIDEO } from "../actions/video_actions";
import merge from 'lodash/merge';

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CHANNEL:
            let newChannel = { [action.channel.id]: action.channel };
            return merge({}, state, newChannel);
        case RECEIVE_VIDEO:
            let newState = merge({}, state, { [action.channel.id]: action.channel });
            return merge({}, newState, action.commentAuthors);
        case RECEIVE_VIDEOS:
            return merge({}, state, action.channels);
        default:
            return state;
    }
};

export default channelsReducer;