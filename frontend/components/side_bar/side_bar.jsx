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
            <>
                <div className="side-bar-container">
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
                            {/* <div className="side-bar-item">
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
                            </div> */}
                        </div>
                        <div className="side-bar-section">
                            <div className="best-of-youtoob">
                                <div>BEST OF YOUTOOB</div>
                            </div>
                            <a href="https://github.com/rmunoz1994">
                                <div className="side-bar-item">
                                    <div className="icon-container">
                                        <i className="fab fa-github"></i>
                                    </div>
                                    <div>
                                        Github
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/raymond-muñoz/">
                                <div className="side-bar-item">

                                    <div className="icon-container">
                                        <i className="fab fa-linkedin"></i>
                                    </div>
                                    <div>
                                        LinkedIn
                                    </div>
                                </div>
                            </a>
                            <a href="https://angel.co/raymond-munoz">
                                <div className="side-bar-item">
                                    <div className="icon-container">
                                        <i className="fab fa-angellist"></i>
                                    </div>
                                    <div>
                                        AngelList
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}

export default withRouter(SideBar);