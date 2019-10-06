import * as APIUtil from '../util/channel_api_util';

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS";

const receiveChannels = ({ channels }) => ({
    type: RECEIVE_CHANNELS,
    channels
});

const receiveChannel = ({ channel, videos }) => ({
    type: RECEIVE_CHANNEL,
    channel,
    videos
});

const removeChannel = channel => {
    return {
        type: REMOVE_CHANNEL,
        channel
    };
};

const receiveChannelErrors = errors => ({
    type: RECEIVE_CHANNEL_ERRORS,
    errors
});

// export const fetchChannel = id => dispatch => {
//     debugger
//     return (
//         APIUtil.fetchChannel(id).then(channel => dispatch(receiveChannel(channel)))
//     );
// };
    


export const fetchChannel = id => dispatch => (
    APIUtil.fetchChannel(id).then(channel => dispatch(receiveChannel(channel)))
);

export const fetchChannels = () => dispatch => (
    APIUtil.fetchChannels().then(channels => dispatch(receiveChannels(channels)))
);

export const createChannel = channel => dispatch => (
    APIUtil.createChannel(channel).then(channel => (
        dispatch(receiveChannel(channel))
    ), err => (
        dispatch(receiveChannelErrors(err.responseJSON))
    ))
);

// export const updateChannel = channel => dispatch => (
//     APIUtil.updateChannel(channel).then(channel => (
//         dispatch(receiveChannel(channel))
//     ), err => (
//         dispatch(receiveChannelErrors(err.responseJSON))
//     ))
// );

export const deleteChannel = channel => dispatch => (
    APIUtil.deleteChannel(channel).then(() => dispatch(removeChannel(channel)))
);

