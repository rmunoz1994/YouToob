import { connect } from 'react-redux';
import React from 'react';
// import { login } from '../../actions/session_actions';
import ChannelShow from './channel_show';
import { fetchChannel } from '../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => {
    const channels = state.entities.channels;
    const channel = channels[ownProps.match.params.channelId];
    const channelVideos = channel !== undefined
        ? Object.values(state.entities.videos).filter(video => channel.id === video.channelId)
        : [];
    return {
        channels,
        channel,
        currentUserId: state.session.currentUser,
        videos: channelVideos
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchChannel: id => dispatch(fetchChannel(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelShow);