import { RECEIVE_CHANNEL } from "../actions/channel_actions";
import { RECEIVE_VIDEOS, RECEIVE_VIDEO } from "../actions/video_actions";
import merge from 'lodash/merge';
import { RECEIVE_SUBSCRIPTION, DELETE_SUBSCRIPTION } from "../actions/subscription_actions";

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_CHANNEL:
            let newChannel = { [action.channel.id]: action.channel };
            return merge({}, state, newChannel);
        case RECEIVE_VIDEO:
            newState = merge({}, state, { [action.channel.id]: action.channel });
            return merge({}, newState, action.commentAuthors);
        case RECEIVE_VIDEOS:
            return merge({}, state, action.channels);
        case RECEIVE_SUBSCRIPTION:
        case DELETE_SUBSCRIPTION:
            newState = merge({}, state);
            newState[action.sub.channel_id].subscriptionCount = action.sub.subscriptionCount;
            return newState;
        default:
            return state;
    }
};

export default channelsReducer;