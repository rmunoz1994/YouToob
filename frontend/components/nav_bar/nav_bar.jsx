import React from 'react';
import UserNav from './user_nav';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <UserNav currentUser={currentUser} />
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
            <i id="icon" class="fas fa-bars"></i>
            <img src="/assets/youtoob_logo-590e7d0fbd1e2f8b5e277d19d97e1c7e5fb16983034876e67b1c783816daaeed.svg"/> 
            <i id="icon" class="fas fa-ellipsis-v"></i>
            <div className="icon-button">
                <i id="icon" class="fas fa-video"></i>
            </div>
            <div>
                { display }
            </div>
        </header>
    )
};