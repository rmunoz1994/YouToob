import { RECEIVE_SUBSCRIPTIONS, RECEIVE_SUBSCRIPTION, DELETE_SUBSCRIPTION } from "../actions/subscription_actions";
import merge from 'lodash/merge';

const subscriptionsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch(action.type) {
        case RECEIVE_SUBSCRIPTIONS:
            return action.subs;
        case RECEIVE_SUBSCRIPTION:
            return merge({}, state, { [action.sub.id]: action.sub});
        case DELETE_SUBSCRIPTION:
            newState = merge({}, state);
            delete newState[action.sub.id];
            return newState;
        default: 
            return state;
    }
};

export default subscriptionsReducer;