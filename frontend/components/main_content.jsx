import React from 'react';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import VideoIndexContainer from './videos/video_index_container';
import VideoShowContainer from './videos/video_show_container';
import VideoUploadContainer from './videos/video_upload_container';
import VideoEditContainer from './videos/video_edit_container';
import SearchResultsContainer from './search/search_results_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, ChannelCreateRoute, RequireChannelRoute } from '../util/route_utils';
import SideBar from './side_bar/side_bar';
import ChannelCreateContainer from './channel/channel_create_container';
import ChannelShowContainer from './channel/channel_show_container';
import { throttle } from 'lodash';
import search_results_container from './search/search_results_container';

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sideBarHidden: false,
            sideBarOpen: false
        };
    }

    toggleSideBar() {
        return e => {
            if (this.state.sideBarOpen) {
                this.setState({ sideBarOpen: false });
            } else {
                this.setState({ sideBarOpen: true });
            }
        };
    }

    hideSideBar() {
        return e => {
            if (this.state.sideBarHidden) {
                this.setState({ sideBarHidden: false });
            } else {
                this.setState({ sideBarHidden: true });
            }
        };
    }

    render() {
        const sideBar = this.state.sideBarOpen ? (<SideBar open={true} />) : (<SideBar open={false} />);
        const sideBarVisibility = this.state.sideBarHidden ? (<div></div>) : (sideBar);
        return (
            <>
                <NavBarContainer toggleSideBar={this.toggleSideBar()} />
                <div className="after-header">
                    {sideBarVisibility}
                    <Switch>
                        <Route exact path="/" component={VideoIndexContainer} />
                        <ProtectedRoute exact path="/videos/:videoId/edit" component={VideoEditContainer} />
                        <Route path="/videos/:videoId" component={VideoShowContainer} />
                        <RequireChannelRoute path="/upload" component={VideoUploadContainer} />
                        <Route path="/results" component={SearchResultsContainer} />
                        <ChannelCreateRoute path="/channel_create" component={ChannelCreateContainer} />
                        <Route path="/channels/:channelId" component={ChannelShowContainer} />
                    </Switch>
                </div>
            </> 
        )
    }
}

export default MainContent;