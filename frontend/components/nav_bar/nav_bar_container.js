import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    
    return {
        currentUser: state.entities.users[state.session.currentUser] 
    };

};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()), 
    openModal: () => dispatch(openModal("createChannel"))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);