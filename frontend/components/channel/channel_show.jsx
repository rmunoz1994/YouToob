import React from 'react';
import { withRouter } from 'react-router-dom';

class ChannelShow extends React.Component {

    constructor(props) {
        super(props);

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
        return (
            <div id="channel-show-container">
                <header>
                    <section id="channel-info">
                        <button className="large-user-pic user-pic">
                            T
                        </button>
                        <div>
                            <h2>Channel Name</h2>
                            <span>35 subscribers</span>
                        </div>
                        <button id="customize-channel-btn">CUSTOMIZE CHANNEL</button>
                    </section>
                    <nav id="channel-nav">
                        <ul>
                            <li>VIDEOS</li>
                            <li>ABOUT</li>
                        </ul>
                    </nav>
                </header>
                {this.loadVideos()}
            </div>
        );
    }

}

export default withRouter(ChannelShow);



{/* <div className="dropdown">
    <button className="user-pic" onClick={this.toggleVisibility}>
        {this.props.currentUser.first_name.slice(0, 1).toUpperCase()}
    </button>
    {dropdown}
</div> */}