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
                <div className="index-container">
                    <div className="video-index-container">
                        <VideoGrid videos={this.props.videos.slice(0,5)} users={this.props.users} title={"Recommended"}/>
                    </div>
                    <div className="video-index-container">
                        <VideoGrid videos={this.props.videos.slice(5,20)} users={this.props.users} title={"Trending"} />
                    </div>
                </div>
            )
        }
    }
}

export default VideoIndex;