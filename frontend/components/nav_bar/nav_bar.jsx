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
            <h1 className="logo">YouToob</h1>
            <div>
                { display }
            </div>
        </header>
    )
};