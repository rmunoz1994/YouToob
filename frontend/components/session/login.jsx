import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: ''
            },
            formType: this.props.formType
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
        // this.handleLink = this.handleLink.bind(this);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    handleInput(type) {
        return (e) => {
            this.setState({ user: {[type]: e.target.value }});
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state.user)
            .then(() => this.props.history.push('/'));
    }

    renderErrors() {
        // if (this.props.errors.length > 0) {
        //     let inputs = document.getElementsByClassName("user-auth-input");
        //     for (let i = 0; i < inputs.length; i++) {
        //         inputs[i].classList.add("error");
        //     }
        // } 
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

    // handleLink() {
    //     // this.props.clearErrors();
    //     this.props.history.push('/signup');
    // }

    handleEmailSubmit() {
        if (this.props.errors.length === 0) {
            this.state.formType = "password";
        }
    }

    // render() {
    //     const errorClass = this.props.errors.length > 0? "error": "";
    //     let emailForm = (
    //         <form onSubmit={this.handleEmailSubmit}>
    //             <input
    //                 className={"user-auth-input login " + errorClass}
    //                 type="text"
    //                 value={this.state.user.email}
    //                 placeholder="Email"
    //                 onChange={this.handleInput("email")}
    //             />
    //             {this.renderErrors()}
    //             <div className="demo">
    //                 Not your computer? Use Guest mode to sign in privately.
    //                 <Link to="/">Sign in as guest</Link>
    //             </div>
    //             <div className="session-form-submit">
    //                 <Link to="/signup">Create account</Link>
    //                 <button className="next-button"> Next </button>
    //             </div>
    //         </form>
    //     )
    //     let passwordForm = (
    //         <form onSubmit={this.handleSubmit}>
    //             <input
    //                 className={"user-auth-input login " + errorClass}
    //                 type="password"
    //                 value={this.state.user.password}
    //                 placeholder="Enter your password"
    //                 onChange={this.handleInput("password")}
    //             />
    //             {this.renderErrors()}
    //             <div className="demo">
    //                 Not your computer? Use Guest mode to sign in privately.
    //                 <Link to="/">Sign in as guest</Link>
    //             </div>
    //             <div className="session-form-submit">
    //                 <Link to="/signup">Create account</Link>
    //                 <button className="next-button"> Next </button>
    //             </div>
    //         </form>
    //     );
    //     let inputForm;
    //     if (this.state.formType === 'email') {
    //         inputForm = emailForm;
    //     } else {
    //         inputForm = passwordForm;
    //     }

    //     return (
    //         <div className="session-form">
    //             <img src="https://img.icons8.com/color/48/000000/youtube-play.png" />
    //             <h1>Sign in</h1>
    //             <h2>to continue to YouToob</h2>
    //             <br />
    //             {inputForm}
    //         </div>
    //     )
    // }

    render() {
        const errorClass = this.props.errors.length > 0 ? "error-login" : "";
        let form = (
            <form onSubmit={this.handleSubmit}>
                <input
                    className={"user-auth-input login " + errorClass}
                    type="text"
                    value={this.state.user.email}
                    placeholder="Email"
                    onChange={this.handleInput("email")}
                />
                <br />
                <input
                    className={"user-auth-input login " + errorClass}
                    type="password"
                    value={this.state.user.password}
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

