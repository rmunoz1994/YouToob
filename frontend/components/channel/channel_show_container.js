import { connect } from 'react-redux';
import React from 'react';
// import { login } from '../../actions/session_actions';
import ChannelShow from './channel_show';
import { fetchChannel } from '../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => {
    const channel = state.entities.channels[ownProps.match.params.channelId];
    return {
        channel,
        currentUserId: state.session.currentUser,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchChannel: id => dispatch(fetchChannel(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelShow);