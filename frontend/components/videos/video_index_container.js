import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { fetchVideos, fetchVideo } from '../../actions/video_actions';

const mapStateToProps = state => {
    const video = state.entities.videos[7];
    return {
        video: video
    };
    // return {
    //     videos: Object.values(state.entities.videos)
    // };
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchVideos: () => dispatch(fetchVideos()),
        fetchVideo: id => dispatch(fetchVideo(id))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);