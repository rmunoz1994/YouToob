import { connect } from 'react-redux';
import VideoEdit from './video_edit';
import { fetchVideo, updateVideo, deleteVideo } from '../../actions/video_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        currentUserId: state.session.currentUser.id,
        video: state.entities.videos[ownProps.match.params.videoId]
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchVideo: id => dispatch(fetchVideo(id)),
        updateVideo: video => dispatch(updateVideo(video)),
        deleteVideo: video => dispatch(deleteVideo(video))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoEdit);