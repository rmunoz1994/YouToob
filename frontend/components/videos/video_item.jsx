import React from 'react';
import { Link } from 'react-router-dom';
// import { url } from 'inspector';

class VideoItem extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     isColumn: this.props.isColumn
        // };
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
        let itemType = this.props.isColumn ? "column" : "";

        return (
            <Link to={`/videos/${this.props.video.id}`} className="video-item-link">
                <div className={"video-item-container " + itemType}>
                    <div className="video-thumbnail-container">
                        <img src={this.props.video.thumbnailUrl} className="video-thumbnail"/>
                        <div className="video-thumbnail-background"></div>
                        <div className="video-item-overlay">
                            <i className="fas fa-play"></i>
                        </div>
                    </div>
                    <div className="video-details">
                        <h3>{this.props.video.title}</h3>
                        <div>
                            {this.props.user.first_name}
                        </div>
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