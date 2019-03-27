import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {

    let preloadedState;
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        };
    }

    let store = configureStore(preloadedState);
    const root = document.getElementById('root');

    //TESTING
    window.currentUser = currentUser;
    //TESTING

    ReactDOM.render(<Root store={ store }/>, root);
});