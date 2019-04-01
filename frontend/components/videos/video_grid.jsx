import React from 'react';
import VideoItem from './video_item';

class VideoGrid extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // let videoGrid = {this.props.videos}.map(video => (
        //     <VideoItem video={this.props.video}/>
        // ));
        let videoGrid = this.props.videos.map(video => (
            <VideoItem video={video} />
        ));
        return (
            <div className="video-grid-container">
                <div className="grid-subheader">
                    <h3>Recommended</h3>
                </div>
                <div className="contents">
                    {videoGrid}
                </div>
            </div>
        )
    }
}

export default VideoGrid;