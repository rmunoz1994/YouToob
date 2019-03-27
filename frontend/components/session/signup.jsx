import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state)
            .then(() => this.props.history.push('/'));
    }

    render() {
        return (
            <div className="session-form">
                <img src="https://img.icons8.com/color/48/000000/youtube-play.png" />
                <h1>Create your Account</h1>
                <h2>to continue to YouToob</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Username:</label>
                    <input 
                        className="user-auth-input signup"
                        type="text" 
                        value={this.state.username}
                        onChange={this.handleInput("username")}
                    />
                    <br/>
                    <label>Email:</label>
                    <input
                        className="user-auth-input signup"
                        type="text"
                        value={this.state.email}
                        onChange={this.handleInput("email")}
                    />
                    <br/>
                    <label>Password:</label>
                    <input
                        className="user-auth-input signup"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInput("password")}
                    />
                    <br/>
                    <div className="session-form-submit">
                        <Link to="/login" >Sign in instead</Link>
                        <button className="next-button"> Next </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signup;