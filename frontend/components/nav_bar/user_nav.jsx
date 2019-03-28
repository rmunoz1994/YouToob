import React from 'react';

class UserNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className="user-nav-inital">
                {this.props.currentUser.username.slice(0,1).toUpperCase()}
            </button>
        )
    }
}

export default UserNav;