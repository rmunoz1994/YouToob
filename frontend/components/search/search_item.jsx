import React from 'react';
import { Link } from 'react-router-dom';
import { timeSincePost } from '../../util/format_util';

class SearchItem extends React.Component {

    redirectToChannel() {
        return (e) => {
            e.preventDefault();
            this.props.history.push(`/channels/${this.props.channel.id}`);
        }
    } 

    render() {
        return (
            <Link to={`/videos/${this.props.video.id}`} className="video-item-link">
                <div className="search-item-container">
                    <div className="search-thumbnail-container">
                        <img src={this.props.video.thumbnailUrl} className="search-thumbnail" />
                        <div className="search-thumbnail-background"></div>
                        <div className="search-item-overlay">
                            <i className="fas fa-play"></i>
                        </div>
                    </div>
                    <div className="search-item-details">
                        <h3>{this.props.video.title}</h3>
                        <div>
                            <div className="meta-data">
                                <div className="upload-name" onClick={this.redirectToChannel()}>{`${this.props.channel.name}`}</div>
                                <div className="upload-time">{'\xa0' + `• ${timeSincePost(this.props.video.createdAt)}`}</div>
                            </div>
                            <div className="upload-description">{this.props.video.description}</div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default SearchItem;