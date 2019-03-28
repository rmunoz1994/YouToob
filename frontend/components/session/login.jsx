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

    handleEmailSubmit(e) {
        e.preventDefault();   
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push('/'));
    }

    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        let form = (
            <form onSubmit={this.handleSubmit}>
                <input
                    className="user-auth-input login"
                    type="text"
                    value={this.state.email}
                    placeholder="Email"
                    onChange={this.handleInput("email")}
                />
                <br />
                <input
                    className="user-auth-input login"
                    type="password"
                    value={this.state.password}
                    placeholder="Enter your password"
                    onChange={this.handleInput("password")}
                /> 
                <div>{this.renderErrors()}</div>
                <div className="demo">
                    Not your computer? Use Guest mode to sign in privately.
                    <Link to="/">Sign in as guest</Link>
                </div>
                <div className="session-form-submit">
                    <Link to="/signup" >Create account</Link>
                    <button className="next-button"> Next </button>
                </div>
            </form>
        )

        return (
            <div className="session-form">
                <img src="https://img.icons8.com/color/48/000000/youtube-play.png" /> 
                <h1>Sign in</h1>
                <h2>to continue to YouToob</h2>
                <br/>
                {form}

            </div>
        )
    }
}

export default Login;

