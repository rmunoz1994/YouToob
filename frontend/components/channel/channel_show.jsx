import React from 'react';
import { withRouter } from 'react-router-dom';

class ChannelShow extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchChannel(this.props.match.params.channelId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.channelId !== this.props.match.params.channelId) {
            this.props.fetchChannel(this.props.match.params.channelId);
        }
    }

    loadVideos() {
        return (
            <section className="channel-show-selection">
                
            </section>
        );
    }

    loadAbout() {

    }

    render() {   
        return this.props.channel === undefined ? null : (
            <div id="channel-show-container">
                <header>
                    <section id="channel-info">
                        <button className="large-user-pic user-pic">
                            T
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
                        <ul>
                            <li><button>VIDEOS</button></li>
                            <li><button>ABOUT</button></li>
                        </ul>
                    </nav>
                </header>
                {this.loadVideos()}
            </div>
        );
    }

}

export default withRouter(ChannelShow);

