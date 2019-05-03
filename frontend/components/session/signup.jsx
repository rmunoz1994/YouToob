import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.makeActive = this.makeActive.bind(this);
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
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        this.props.createNewUser(this.state)
            .then(() => this.props.history.push('/'));
    }

    makeActive(type) {
        return (e) => {
            const inputGroup = document.getElementById(type);
            if (e.type === "focus") {
                inputGroup.classList.remove('filled');
                inputGroup.classList.add('active');
            } else {
                inputGroup.classList.remove('active');
                if (e.target.value !== "") {
                    inputGroup.classList.add('filled');
                }
            }
        };
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
            <div className="session-form-container">
                <div className="create-user">
                    <div className="create-user-left">
                        <img src="https://img.icons8.com/color/48/000000/youtube-play.png" />
                        <h1>Create your YouToob Account</h1>
                        <form onSubmit={this.handleSubmit} className="create-user-form">
                            <div>
                                <div className="full-name-inputs">
                                    <div id="firstNameGroup" className="input-group-signup">
                                        <input 
                                            id="firstName"
                                            className={"create-user-input " + errorClass}
                                            type="text" 
                                            value={this.state.first_name}
                                            onChange={this.handleInput("first_name")}
                                            onFocus={this.makeActive("firstNameGroup")}
                                            onBlur={this.makeActive("firstNameGroup")}
                                        />
                                        <label htmlFor="firstName">First name</label>
                                    </div>
                                    <div id="lastNameGroup" className="input-group-signup">
                                        <input
                                            id="lastName"
                                            className={"create-user-input " + errorClass}
                                            type="text"
                                            value={this.state.last_name}
                                            onChange={this.handleInput("last_name")}
                                            onFocus={this.makeActive("lastNameGroup")}
                                            onBlur={this.makeActive("lastNameGroup")}
                                        />
                                        <label htmlFor="lastName">Last name</label>
                                    </div>
                                </div>
                                <div>
                                    <div id="emailGroup" className="input-group-signup">
                                        <input
                                            id="email"
                                            className={"create-user-input " + errorClass}
                                            type="text"
                                            value={this.state.email}
                                            onChange={this.handleInput("email")}
                                            onFocus={this.makeActive("emailGroup")}
                                            onBlur={this.makeActive("emailGroup")}
                                        />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>
                                <div>
                                    <div id="passwordGroup" className="input-group-signup">
                                        <input
                                            id="password"
                                            className={"create-user-input " + errorClass}
                                            type="password"
                                            value={this.state.password}
                                            onChange={this.handleInput("password")}
                                            onFocus={this.makeActive("passwordGroup")}
                                            onBlur={this.makeActive("passwordGroup")}
                                        />
                                        <label htmlFor="password">Password</label>
                                    </div>
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
                        <img src={window.signUpLogo}/>
                        {/* <button></button> */}
                        <figcaption>One Account. All of YouToob working for you.</figcaption>
                    </figure>
                    
                </div>
            </div>
        )
    }
}

export default Signup;