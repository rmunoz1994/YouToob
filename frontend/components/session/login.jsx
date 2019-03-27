import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // username: '',
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
        this.props.login(this.state)
            .then(() => this.props.history.push('/'));
    }

    render() {
        return (
            <div className="session-form">
                <img src="https://img.icons8.com/color/48/000000/youtube-play.png" /> 
                <h1>Sign in</h1>
                <h2>to continue to YouToob</h2>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    {/* <label>Username:</label>
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.handleInput("username")}
                    />
                    <br /> */}
                    <label>Email:</label>
                    <input
                        className="user-auth-input"
                        type="text"
                        value={this.state.email}
                        onChange={this.handleInput("email")}
                    />
                    <br />
                    <label>Password:</label>
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInput("password")}
                    />
                    <div className="session-form-submit">
                        <Link to="/signup" ><div>Create account</div></Link>
                        <button className="next-button"> Next </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;