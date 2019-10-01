import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.currentUser),
    users: state.entities.users,
    channels: state.entities.channels,
    currentUserId: state.session.currentUser
});

const Auth = ({ loggedIn, path, component: Component }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Redirect to="/" /> : <Component {...props} />
        )}
    />
);

const Protected = ({loggedIn, path, component: Component}) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
        )}
    />
);

const ChannelCreate = ({users, currentUserId, loggedIn, path, component: Component}) => (
    <Route
        path={path}
        render={props => {
            if (loggedIn) {
                const ownedChannels = users[currentUserId].ownedChannelIds || [];
                return ownedChannels.length === 0 ? <Component {...props} /> : <Redirect to={`channels/${ownedChannels[0]}`} />
            } else {
                return <Redirect to="/login" />
            }
        }}
    />
);

const RequireChannel = ({ users, currentUserId, path, ...rest }) => (
    <Route
        path={path}
        render={props => {
            const currentUser = users[currentUserId] || {};
            const ownedChannels = currentUser.ownedChannelIds || [];
            return ownedChannels.length === 0 ? <Redirect to="/channel_create" /> 
            : <ProtectedRoute path={path} {...rest} {...props} />
        }}
    />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const ChannelCreateRoute = withRouter(connect(mapStateToProps)(ChannelCreate));
export const RequireChannelRoute = withRouter(connect(mapStateToProps)(RequireChannel));