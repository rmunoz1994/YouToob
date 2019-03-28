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
        // this.handleLink = this.handleLink.bind(this);
    }

    componentWillUnmount() {
        this.props.clearErrors();
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

    renderErrors() {
        return (
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
        const errorClass = this.props.errors.length > 0 ? "error-signup" : "";
        return (
            <div className="create-user">
                <div>
                    <img src="https://img.icons8.com/color/48/000000/youtube-play.png" />
                    <h1>Create your YouToob Account</h1>
                    <form onSubmit={this.handleSubmit} className="create-user-form">
                        <div>
                            <div>
                                <input 
                                    className={"create-user-input " + errorClass}
                                    type="text" 
                                    value={this.state.username}
                                    placeholder="Username"
                                    onChange={this.handleInput("username")}
                                />
                            </div>
                            <div>
                                <input
                                    className={"create-user-input " + errorClass}
                                    type="text"
                                    value={this.state.email}
                                    placeholder="Email"
                                    onChange={this.handleInput("email")}
                                />
                            </div>
                            <div>
                                <input
                                    className={"create-user-input " + errorClass}
                                    type="password"
                                    value={this.state.password}
                                    placeholder="Password"
                                    onChange={this.handleInput("password")}
                                />
                            </div>
                            <div className="password-hint">
                                Use 6 or more characters
                            </div>
                            {this.renderErrors()}
                            <div className="create-user-form-submit">
                                <Link to="/login" >Sign in instead</Link>
                                <button className="next-button"> Next </button>
                            </div>
                        </div>
                    </form>
                </div>
                
                <figure className="image-placeholder">
                    <button></button>
                    <figcaption>One Account. All of YouToob working for you.</figcaption>
                </figure>
                
            </div>
        )
    }
}

export default Signup;