import React from 'react';
import { withRouter } from 'react-router-dom';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.closedRender = this.closedRender.bind(this);
        this.openRender = this.openRender.bind(this);
    }

    handleLink(link) {
        return e => {
            this.props.history.push(link);
        };
    }

    closedRender() {
        return (
            <div id="closed-side-bar-container">
                <div id="closed-side-bar">
                    <a className="closed-side-bar-items" onClick={this.handleLink('/')}>
                        <div>
                            <i className="fas fa-home"></i>
                        </div>
                        <span>Home</span>
                    </a>
                    <a className="closed-side-bar-items" onClick={this.handleLink('/')}>
                        <div>
                            <i className="fas fa-fire"></i>
                        </div>
                        <span>Trending</span>
                    </a>
                </div>             
            </div>
        );
    }

    openRender() {
        return (
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
        );
    }

    render() {
        return (
            <>
            {this.props.open ? this.openRender() : this.closedRender()}
            </>
        )
    }
}

export default withRouter(SideBar);