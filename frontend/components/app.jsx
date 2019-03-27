import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={ NavBarContainer } />
            <AuthRoute path="/signup" component={ SignupContainer }/>
            <AuthRoute path="/login" component={ LoginContainer } />
        </Switch>
    </div>
);

export default App;