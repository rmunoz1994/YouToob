import React from 'react';
import { withRouter, NavLink, Link } from 'react-router-dom';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.closedRender = this.closedRender.bind(this);
        this.openRender = this.openRender.bind(this);
        this.renderSubscriptions = this.renderSubscriptions.bind(this);
    }

    handleLink(link) {
        return e => {
            this.props.history.push(link);
        };
    }

    redirectToChannel(channelId) {
        return (e) => {
            e.preventDefault();
            this.props.history.push(`/channels/${channelId}`);
        }
    } 

    retrieveSubs() {
        const subs = []
        for (let i = 0; i < this.props.subscriptions.length; i++) {
            const sub = this.props.subscriptions[i];
            subs.push(
                <a key={sub.id}
                    onClick={this.redirectToChannel(sub.channel_id)}>
                    <div className="side-bar-item">
                        <div className="icon-container">
                            <i className="fas fa-user-circle"></i>
                        </div>
                        <div>{sub.channelName}</div>
                    </div>
                </a>
            )
        }
        return subs;
    }

    renderSubscriptions() {

        return (
            this.props.loggedIn ?
                <div className="side-bar-section">
                    <div className="best-of-youtoob">
                        <div>SUBSCRIPTIONS</div>
                    </div>
                    {this.retrieveSubs()}
                </div>
            : null
        )
    }

    closedRender() {
        return (
            <div id="closed-side-bar-container">
                <div id="closed-side-bar">
                    <NavLink exact to={'/'} className="closed-side-bar-items" activeClassName="closed-selected">
                        <div>
                            <i className="fas fa-home"></i>
                        </div>
                        <span>Home</span>
                    </NavLink>
                    {/* <a className="closed-side-bar-items" onClick={this.handleLink('/')}>
                        <div>
                            <i class="fab fa-youtube"></i>
                        </div>
                        <span>Subscriptions</span>
                    </a> */}
                    <a className="closed-side-bar-items" href="https://github.com/rmunoz1994">
                        <div>
                            <i className="fab fa-github"></i>
                        </div>
                        <span>Github</span>
                    </a>
                    <a className="closed-side-bar-items" href="https://www.linkedin.com/in/raymond-muñoz/">
                        <div>
                            <i className="fab fa-linkedin"></i>
                        </div>
                        <span>LinkedIn</span>
                    </a>
                    <a className="closed-side-bar-items" href="https://angel.co/raymond-munoz">
                        <div>
                            <i className="fab fa-angellist"></i>
                        </div>
                        <span>AngelList</span>
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
                        <NavLink exact to={'/'} className="side-bar-item" activeClassName="open-selected">
                            <div className="icon-container">
                                <i className="fas fa-home"></i>
                            </div>
                            <div>Home</div>
                        </NavLink>
                    </div>
                    <div className="side-bar-section">
                        {/* <div className="best-of-youtoob">
                            <div>BEST OF YOUTOOB</div>
                        </div> */}
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
                    {this.props.loggedIn ? null : (
                        <div className="side-bar-section-sign-in">
                            <div className="side-bar-item-sign-in">
                                <span>Sign in to like videos, comment, and subscribe.</span>
                                <Link to="/login" className="sign-in-link">
                                    <div className="icon-container">
                                        <i className="fas fa-user-circle"></i>
                                    </div>
                                    <span className="sign-in-text">SIGN IN</span>
                                </Link>
                            </div>
                        </div>
                    )}
                    {this.renderSubscriptions()}
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