import * as APIUtil from '../util/subscription_api_util';

export const RECEIVE_SUBSCRIPTION = 'RECEIVE_SUBSCRIPTION';
export const RECEIVE_SUBSCRIPTIONS = 'RECEIVE_SUBSCRIPTIONS';
export const DELETE_SUBSCRIPTION = 'DELETE_SUBSCRIPTION';

const receiveSubscription = sub => ({
    type: RECEIVE_SUBSCRIPTION,
    sub
});

const receiveSubscriptions = subs => ({
    type: RECEIVE_SUBSCRIPTIONs,
    subs
});

const deleteSubscription = sub => ({
    type: DELETE_SUBSCRIPTION,
    sub
});

export const subscribe = channel_id => dispatch => {
    return APIUtil.updateSubscription(channel_id)
        .then(sub => dispatch(receiveSubscription(sub)));
}


export const unsubscribe = sub_id => dispatch => {
    return APIUtil.deleteSubscription(sub_id)
        .then(sub => dispatch(deleteSubscription(sub)));
}

export const fetchSubscriptions = () => dispatch => {
    return APIUtil.fetchSubscriptions()
        .then((subs) => dispatch(receiveSubscriptions(subs)));
}