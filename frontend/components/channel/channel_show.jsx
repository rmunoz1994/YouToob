import React from 'react';
import { Route, NavLink, Switch, withRouter } from 'react-router-dom';
import ChannelAbout from './channel_about';
import ChannelVideos from './channel_videos';

class ChannelShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        window.scrollTo(0,0);
        this.props.fetchChannel(this.props.match.params.channelId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.channelId !== this.props.match.params.channelId) {
            window.scrollTo(0,0);
            this.props.fetchChannel(this.props.match.params.channelId);
        }
    }

    selectTab(tab) {

    }

    render() {   
        return this.props.channel === undefined ? null : (
            <div id="channel-show-container">
                <header>
                    <section id="channel-info">
                        <button className="large-user-pic user-pic">
                            {this.props.channel.name.slice(0,1).toUpperCase()}
                        </button>
                        <div id="channel-info-reflow">
                            <div id="name-and-subscribers">
                                <h2>{this.props.channel.name}</h2>
                                <span>35 subscribers</span>
                            </div>
                            <button id="customize-channel-btn">CUSTOMIZE CHANNEL</button>
                        </div>  
                    </section>
                    <nav id="channel-nav">
                        <NavLink exact to={`/channels/${this.props.channel.id}/`} activeClassName="tab-selected">VIDEOS</NavLink>
                        <NavLink exact to={`/channels/${this.props.channel.id}/about`} activeClassName="tab-selected">ABOUT</NavLink>
                    </nav>
                </header>
                <Switch>
                    <Route 
                        exact path="/channels/:channelId" 
                        render={() => <ChannelVideos {...this.props} />} 
                    />
                    <Route 
                        path="/channels/:channelId/about"
                        render={() => <ChannelAbout {...this.props} />}
                    />
                </Switch>
            </div>
        );
    }

}

export default withRouter(ChannelShow);

