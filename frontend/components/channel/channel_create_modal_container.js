import { connect } from 'react-redux';
import React from 'react';
// import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import ChannelCreateModal from './channel_create_modal';
import { createChannel } from '../../actions/channel_actions';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'createChannel',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        openModal: () => dispatch(openModal('createChannel')),
        closeModal: () => dispatch(closeModal()),
        createChannel: channel => dispatch(createChannel(channel))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelCreateModal);