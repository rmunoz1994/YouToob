import React from 'react';
import { withRouter } from 'react-router-dom';

class ChannelCreateModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: ""
        };
        this.redirectToIndex = this.redirectToIndex.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    redirectToIndex() {
        this.props.history.push('/');
        this.props.closeModal();
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        let channel = {
            name: this.state.name,
            description: this.state.description
        };
        this.props.createChannel(channel)
            .then(() => this.redirectToIndex());
    }

    render() {
        return (
            <div id="channel-create-container">
                <header>
                    <h2>
                        Use YouToob as...
                    </h2>
                </header>
                <form onSubmit={this.handleSubmit}>
                    <section>
                        <img src={window.newChannelPhoto} />
                        <input className="modal-input" type="text" onChange={this.handleInput("name")} placeholder="Channel Name"/>
                        <input className="modal-input" type="text" onChange={this.handleInput("description")} placeholder="Description" />
                    </section>
                    <footer>
                        <button className="cancel-channel-btn" onClick={this.redirectToIndex}>CANCEL</button>
                        <button type="submit" id="create-channel-btn">CREATE CHANNEL</button>
                    </footer>
                </form>
            </div>
        );
    }

}

export default withRouter(ChannelCreateModal);