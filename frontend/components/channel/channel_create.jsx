import { withRouter } from 'react-router-dom';
import React from 'react';

class ChannelCreate extends React.Component {

    constructor(props) {
        super(props);
        this.props.openModal();
    }

    render() {
        return (null);
    }
}

export default withRouter(ChannelCreate);