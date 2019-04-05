import React from 'react';
import { Link } from 'react-router-dom';
// import { url } from 'inspector';

class VideoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isColumn: this.props.isColumn
        };
        this.formatTimeDifference = this.formatTimeDifference.bind(this);
    }

    formatTimeDifference() {
        let today = new Date();
        let uploadDate = new Date(this.props.video.createdAt);
        let timeDiff = Math.abs(today.getTime() - uploadDate.getTime());
        let result = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return result.toString() + " day ago";
    }

    // formatTimeDifference() {
    //     let today = new Date();
    //     let uploadDate = new Date(this.props.video.createdAt);
    //     let timeDiff = Math.abs(today.getTime() - uploadDate.getTime());
    //     if (timeDiff < 60) {
    //         return 'now';
    //     } else if (timeDiff < 3600) {

    //     } else if (timeDiff < 3600 * 24) {

    //     } else if (timeDiff < 3600* 24 * 2)
    // }

    render() {
        const isColumn = this.state.isColumn;
        let content;
        if (isColumn) {
            content = (
                <div className="video-item-container-col">
                    <div className="video-thumbnail-container-col">
                        <img src={this.props.video.thumbnailUrl} className="video-thumbnail-col" />
                        <div className="video-thumbnail-background-col"></div>
                        <div className="video-item-overlay-col">
                            <i className="fas fa-play"></i>
                        </div>
                    </div>
                    <div className="video-details-col">
                        <h3>{this.props.video.title}</h3>
                        <div className="upload-name-col">
                            {this.props.user.first_name}
                        </div>
                        <div className="upload-time-col">
                            Recommended for you
                        </div>
                    </div>
                </div>
            )
        } else {
            content = ( 
                <div className="video-item-container">
                    <div className="video-thumbnail-container">
                        <img src={this.props.video.thumbnailUrl} className="video-thumbnail" />
                        <div className="video-thumbnail-background"></div>
                        <div className="video-item-overlay">
                            <i className="fas fa-play"></i>
                        </div>
                    </div>
                    <div className="video-details">
                        <h3>{this.props.video.title}</h3>
                        <div className="upload-name">
                            {this.props.user.first_name}
                        </div>
                        <div className="upload-time">
                            {this.formatTimeDifference()}
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <Link to={`/videos/${this.props.video.id}`} className="video-item-link">
                {content}
            </Link>
        )
    }
}

export default VideoItem;