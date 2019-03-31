import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { fetchVideos } from '../../actions/video_actions';

const mapStateToProps = state => {
    return {
        videos: Object.values(videos)
    };
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchVideos: () => dispatch(fetchVideos())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);