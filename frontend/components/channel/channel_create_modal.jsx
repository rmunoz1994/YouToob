import React from 'react';
import { withRouter } from 'react-router-dom';

class ChannelCreateModal extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="channel-create-container">
                <header>Use YouToob as...</header>
                <section>
                    <img src={window.newChannelPhoto} />
                    <form action="">
                        <input className="modal-input" type="text"/>
                        <input className="modal-input" type="text"/>
                    </form>
                </section>
                <footer>
                    <button>CANCEL</button>
                    <button>CREATE CHANNEL</button>
                </footer>
            </div>
        );
    }

}

export default withRouter(ChannelCreateModal);