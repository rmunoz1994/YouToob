import React from 'react';
import { withRouter } from 'react-router-dom';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    handleLink(link) {
        return e => {
            this.props.history.push(link);
        };
    }

    render() {
        return (
            <div className="side-bar">
                <div className="side-bar-section">
                    <div className="side-bar-item" onClick={this.handleLink('/')}>
                        <div>
                            <i className="fas fa-home"></i>
                        </div>
                        <div>
                            Home
                        </div>
                    </div>
                    <div className="side-bar-item">
                        <div>
                            <i className="fas fa-fire"></i>
                        </div>
                        <div>
                            Trending
                        </div>
                    </div>
                    <div className="side-bar-item">
                        <div>
                            <i className="fas fa-history"></i>
                        </div>
                        <div>
                            History
                        </div>
                    </div>
                </div>
                <div className="side-bar-section">
                    <div className="best-of-youtoob">
                        <div>BEST OF YOUTOOB</div>
                    </div>
                    <div className="side-bar-item">
                        <div>
                            Music
                        </div>
                    </div>
                    <div className="side-bar-item">
                        <div>
                            Sports
                        </div>
                    </div>
                    <div className="side-bar-item">
                        <div>
                            Gaming
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default withRouter(SideBar);