import React from 'react';
import { withRouter } from 'react-router-dom';

class ChannelCreateModal extends React.Component {

    constructor(props) {
        super(props);
        this.redirectToIndex = this.redirectToIndex.bind(this);
    }

    redirectToIndex() {
        this.props.history.push('/');
        this.props.closeModal();
    }

    render() {
        return (
            <div id="channel-create-container">
                <header>
                    <h2>
                        Use YouToob as...
                    </h2>
                </header>
                <section>
                    <img src={window.newChannelPhoto} />
                    <form action="">
                        <input className="modal-input" type="text" placeholder="Channel Name"/>
                        <input className="modal-input" type="text" placeholder="Description" />
                    </form>
                </section>
                <footer>
                    <button className="cancel-channel-btn" onClick={this.redirectToIndex}>CANCEL</button>
                    <button id="create-channel-btn">CREATE CHANNEL</button>
                </footer>
            </div>
        );
    }

}

export default withRouter(ChannelCreateModal);