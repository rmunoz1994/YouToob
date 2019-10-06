import { connect } from 'react-redux';
import VideoUpload from './video_upload';
import { createVideo } from '../../actions/video_actions';

const mapStateToProps = ({ entities, session, errors}) => {
    return ({
        channelId: entities.users[session.currentUser].channelIds[0],
        currentUserId: session.currentUser,
        errors: errors.videos
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        uploadVideo: video => dispatch(createVideo(video))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoUpload);