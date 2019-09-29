import * as APIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

const receiveAllUsers = ({ users, ownedChannelIds }) => ({
    type: RECEIVE_ALL_USERS,
    users,
    ownedChannelIds
});

const receiveUser = ({ user, ownedChannelIds }) => ({
    type: RECEIVE_USER,
    user,
    ownedChannelIds
});

export const fetchUsers = () => dispatch => (
    APIUtil.fetchUsers().then(users => dispatch(receiveAllUsers()))
);

export const fetchUser = id => dispatch => (
    APIUtil.fetchUser(id).then(user => dispatch(receiveUser(user)))
);