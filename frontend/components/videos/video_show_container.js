import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo } from '../../actions/video_actions';

const mapStateToProps = (state, ownProps) => {
    const video = state.entities.videos[ownProps.match.params.videoId];
    return {
        video: video
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchVideo: id => dispatch(fetchVideo(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);