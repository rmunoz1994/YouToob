import React from 'react';
import VideoGrid from './video_grid';

class VideoIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchVideo(5);
    }

    render() {
        if (this.props.video === undefined) {
            return null;
        } else {
            let arr = [];
            for(let i = 0; i < 14; i++) {
                arr.push(this.props.video);
            }
            return (
                <div className="video-index-container">
                    <VideoGrid videos={arr}/>
                </div>
            )
        }
    }
}

export default VideoIndex;