import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import VideoIndex from './videos/video_index_container';
import VideoShow from './videos/video_show_container';
import VideoUploadContainer from './videos/video_upload_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            {/* <Route exact path="/" component={ NavBarContainer } /> */}
            <Route path="/videos/:videoId" component={ VideoShow } />
            <ProtectedRoute path="/upload" component={ VideoUploadContainer } />
            <AuthRoute path="/signup" component={ SignupContainer }/>
            <AuthRoute path="/login" component={ LoginContainer } />
            {/* <Route path="/videos" component={ VideoIndex } /> */}
        </Switch>
    </div>
);

export default App;