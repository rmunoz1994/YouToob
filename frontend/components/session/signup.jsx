import React from 'react';

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
                <h2>Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Username:</label>
                    <input 
                        type="text" 
                        value={this.state.username}
                        onChange={this.handleInput("username")}
                    />
                    <br/>
                    <label>Email:</label>
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.handleInput("email")}
                    />
                    <br/>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInput("password")}
                    />
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default Signup;