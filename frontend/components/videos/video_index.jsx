import React from 'react';
import VideoGrid from './video_grid';

class VideoIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchVideos();
    }

    render() {
        if (this.props.videos.length === 0) {
            return null;
        } else {
            return (
                <div className="video-index-container">
                    <VideoGrid videos={this.props.videos} users={this.props.users}/>
                </div>
            )
        }
    }
}

export default VideoIndex;