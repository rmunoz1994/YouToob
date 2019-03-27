import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <p>Hello, {currentUser.username}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
        <div>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">SIGN IN</Link>
        </div>
    );

    return (
        <header className="nav-bar">
            <img src="https://img.icons8.com/color/48/000000/youtube-play.png"/> 
            <h3 className="logo">YouToob</h3>
            <div>
                { display }
            </div>
        </header>
    )
};