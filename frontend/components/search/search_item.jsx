import React from 'react';
import { Link } from 'react-router-dom';
import { timeSincePost } from '../../util/format_util';

class SearchItem extends React.Component {
    // content = (
    //     <div className="video-item-container">
    //         <div className="video-thumbnail-container">
    //             <img src={this.props.video.thumbnailUrl} className="video-thumbnail" />
    //             <div className="video-thumbnail-background"></div>
    //             <div className="video-item-overlay">
    //                 <i className="fas fa-play"></i>
    //             </div>
    //         </div>
    //         <div className="video-details">
    //             <h3>{this.props.video.title}</h3>
    //             <div className="upload-name">
    //                 {this.props.user.first_name}
    //             </div>
    //             <div className="upload-time">
    //                 {timeSincePost(this.props.video.createdAt)}
    //             </div>
    //         </div>
    //     </div>
    // )
    render() {
        return (
            <Link to={`/videos/${this.props.video.id}`} className="video-item-link">
                <div>
                    <div className="search-thumbnail-container">
                        <img src={this.props.video.thumbnailUrl} className="video-thumbnail" />
                        <div className="video-thumbnail-background"></div>
                        <div className="video-item-overlay">
                            <i className="fas fa-play"></i>
                        </div>
                    </div>
                    <div className="search-item-details">
                        <h3>{this.props.video.title}</h3>
                        <div>
                            <div className="upload-name">{this.props.user.first_name}</div>
                            <div className="upload-time">{timeSincePost(this.props.video.createdAt)}</div>
                            <div className="upload-description">{this.props.video.description}</div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default SearchItem;