import React from 'react';
import UserNav from './user_nav';
import UploadDropdown from './upload_dropdown';
import { Link, withRouter } from 'react-router-dom';
import SearchContainer from '../search/search_container';

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.handleIndexLink = this.handleIndexLink.bind(this);
        this.handleChannelLink = this.handleChannelLink.bind(this);
    }

    handleIndexLink() {
        this.props.history.push('/');
    }

    handleChannelLink() {
        if (this.props.currentUser.ownedChannelIds.length > 0) {
            this.props.history.push(`/channels/${this.props.currentUser.ownedChannelIds[0]}`)
        } else {
            this.props.history.push('/channel_create');
        }
    }

    render() {

        const display = this.props.currentUser ? (
            <div>
                <UserNav currentUser={this.props.currentUser} logout={this.props.logout} channel={this.handleChannelLink}/>
            </div>
        ) : (
            <div>
                <Link to="/login" className="sign-in-link">SIGN IN</Link>
            </div>
        );

        const uploadDrop = (<UploadDropdown props={this.props}/>);

        return (

                <header className="nav-bar">
                    <div className="nav-bar-left-icons">
                        <button className="nav-bar-button" onClick={this.props.toggleSideBar}>
                            <i id="icon" className="fas fa-bars"></i>
                        </button>
                        <img className="logo" src={window.logo}
                            onClick={this.handleIndexLink}
                        />
                    </div>
                    <SearchContainer />
                    <div className="nav-bar-right-icons">
                        {uploadDrop}
                        {/* <button className="nav-bar-button">
                            <i id="icon" className="fas fa-ellipsis-v"></i>
                        </button> */}
                        {display}
                    </div>
                </header>
 
        )
    }

}

export default withRouter(NavBar);
