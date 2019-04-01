import React from 'react';
import { Link } from 'react-router-dom';
// import { url } from 'inspector';

class VideoItem extends React.Component {
    constructor(props) {
        super(props);
        this.formatTimeDifference = this.formatTimeDifference.bind(this);
    }

    formatTimeDifference() {
        let today = new Date();
        let uploadDate = new Date(this.props.video.createdAt);
        // let uploadDay = uploadDate.getDate();
        let timeDiff = Math.abs(today.getTime() - uploadDate.getTime());
        let result = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return result.toString() + " day ago";
    }

    render() {
        return (
            <Link to={`/videos/${this.props.video.id}`} className="video-item-link">
                <div className="video-item-container">
                    <div className="video-thumbnail-container">
                        <img src={this.props.video.thumbnailUrl} className="video-thumbnail"/>
                        <div className="video-thumbnail-background"></div>
                        <div className="video-item-overlay">
                            <i className="fas fa-play"></i>
                        </div>
                    </div>
                    <div className="video-details">
                        <h3>{this.props.video.title}</h3>
                        <div className="upload-time">
                            {this.formatTimeDifference()}
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default VideoItem;