import { connect } from 'react-redux';
import React from 'react';
// import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import ChannelCreate from './channel_create';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'createChannel',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        openModal: () => dispatch(openModal('createChannel')),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelCreate);