import SideBar from "./side_bar";
import { connect } from 'react-redux';

const msp = (state, ownProps) => ({
    loggedIn: state.session.currentUser,
    subscriptions: Object.values(state.entities.subscriptions)
});

const mdp = dispatch => ({
    fetchVideos: filters => dispatch(fetchVideos(filters)),
    clearVideos: () => dispatch(clearVideos())
});

export default connect(msp, mdp)(SideBar);
