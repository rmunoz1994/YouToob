import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        document.body.style.backgroundColor = "white";
    }

    componentWillUnmount() {
        this.props.clearErrors();
        document.body.style.backgroundColor = null;
    }

    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push('/'));
    }

    renderErrors() {
        return(
            <ul className="error-list">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        <i className="fas fa-exclamation-circle"></i>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const errorClass = this.props.errors.length > 0 ? "error-login" : "";
        let form = (
            <form onSubmit={this.handleSubmit}>
                <input
                    className={"user-auth-input login " + errorClass}
                    type="text"
                    value={this.state.email}
                    placeholder="Email"
                    onChange={this.handleInput("email")}
                />
                <br />
                <input
                    className={"user-auth-input login " + errorClass}
                    type="password"
                    value={this.state.password}
                    placeholder="Enter your password"
                    onChange={this.handleInput("password")}
                /> 
                {this.renderErrors()}
                <div className="demo">
                    Not your computer? Use Guest mode to sign in privately.
                    <Link to="/">Sign in as guest</Link>
                </div>
                <div className="session-form-submit">
                    <Link to="/signup">Create account</Link>
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

