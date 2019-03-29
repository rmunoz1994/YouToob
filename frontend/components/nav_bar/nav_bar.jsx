import React from 'react';
import UserNav from './user_nav';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <UserNav currentUser={currentUser} logout={logout} />
            {/* <p>Hello, {currentUser.username}</p>
            <button onClick={logout}>Log Out</button> */}
        </div>
    ) : (
        <div>
            {/* <Link to="/signup">Sign Up</Link> */}
            <Link to="/login" className="sign-in-link">SIGN IN</Link>
        </div>
    );

    return (
        <header className="nav-bar">
            <div className="nav-bar-left-icons">
                <button className="nav-bar-button">
                    <i id="icon" className="fas fa-bars"></i>
                </button>
                <img src="/assets/youtoob_logo-590e7d0fbd1e2f8b5e277d19d97e1c7e5fb16983034876e67b1c783816daaeed.svg"/> 
            </div>
            <div className="nav-bar-right-icons">
                <button className="nav-bar-button">
                    <i id="icon" className="fas fa-video"></i>
                </button>
                <button className="nav-bar-button">
                    <i id="icon" className="fas fa-ellipsis-v"></i>
                </button>
                { display }
            </div>
        </header>
    )
};