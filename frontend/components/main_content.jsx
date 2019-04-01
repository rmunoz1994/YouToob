import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import VideoIndexContainer from './videos/video_index_container';
import VideoShowContainer from './videos/video_show_container';
import VideoUploadContainer from './videos/video_upload_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

const MainContent = () => (
    <div>
        <NavBarContainer />
        <Switch>
            {/* <Route exact path="/" component={ NavBarContainer } /> */}
            <Route path="/index" component={VideoIndexContainer} />
            <Route path="/videos/:videoId" component={VideoShowContainer} />
            <ProtectedRoute path="/upload" component={VideoUploadContainer} />
            {/* <Route path="/videos" component={ VideoIndex } /> */}
        </Switch>
    </div>
);

export default MainContent;