import React from 'react';

class UserNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="user-nav-initial" onClick={this.props.logout}>
                {this.props.currentUser.username.slice(0,1).toUpperCase()}
            </div>
        )
    }
}

export default UserNav;