import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { subscribe, unsubscribe } from '../../actions/subscription_actions';

class SubscribeButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            updating: false
        };
    }

    subscribe() {
        return (e) => {
            e.preventDefault();
            if (this.props.loggedIn) {
                if (!this.state.updating) {
                    this.state.updating = true;
                    this.props.subscribe(this.props.channel.id)
                        .then(() => this.setState({updating: false}))
                        .fail(() => this.setState({ updating: false }));
                }
            } else {
                this.props.history.push('/login');
            }
        }
    }

    unsubscribe() {
        return (e) => {
            e.preventDefault();
            if (this.props.loggedIn) {
                this.setState({updating: true});
                this.props.unsubscribe(this.props.sub.sub_id).then(() => {
                    this.setState({updating: false})
                }).fail(() => this.setState({ updating: false }));
            } else {
                props.history.push('/login');
            }
        }
    }

    render() {
        const button = this.props.sub.sub_id && this.props.loggedIn ?
            <button id="subscribed-btn" onClick={this.unsubscribe()}>SUBSCRIBED</button>
            :
            <button id="subscribe-btn" onClick={this.subscribe()}>SUBSCRIBE</button>;
        return (
            <>
                {button}
            </>
        )
    }
}



const filterSubscriptions = (channel_id, subscriptions) => {
    for (let i = 0; i < subscriptions.length; i++) {
        if (subscriptions[i].channel_id === channel_id) {
            return { sub_id: subscriptions[i].id }
        }
    }
    return { sub_id: null };
}

// subscriptions.filter(subscription => {
//     subscription.channel_id === channel_id
// })

const mapStateToProps = (state, props) => {
    return {
        loggedIn: Boolean(state.session.currentUser),
        sub: filterSubscriptions(props.channel.id, Object.values(state.entities.subscriptions))
    }
};

const mapDisptachToProps = dispatch => {
    return {
        subscribe: channel_id => dispatch(subscribe(channel_id)),
        unsubscribe: sub_id => dispatch(unsubscribe(sub_id))
    }
};

export default withRouter(connect(mapStateToProps, mapDisptachToProps)(SubscribeButton));