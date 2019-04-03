import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo, clearVideos } from '../../actions/video_actions';

const mapStateToProps = (state, ownProps) => {
    const video = state.entities.videos[ownProps.match.params.videoId];
    let uploader;
    if (video) {
        uploader = state.entities.users[video.uploaderId]
    }
    return {
        currentUser: state.entities.users[state.session.currentUser],
        uploader: uploader,
        video: video
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchVideo: id => dispatch(fetchVideo(id)),
        clearVideos: () => dispatch(clearVideos())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);