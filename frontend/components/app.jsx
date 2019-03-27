import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';

const App = () => (
    <div>
        <Route path="/" component={ NavBarContainer } />
        <AuthRoute path="/signup" component={ SignupContainer }/>
    </div>
);

export default App;