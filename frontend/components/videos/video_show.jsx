import React from 'react';
import { withRouter } from 'react-router-dom';
import VideoItem from './video_item';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
        this.formatDate = this.formatDate.bind(this);
        this.handleEditLink = this.handleEditLink.bind(this);
    }

    componentDidMount() {
        this.props.clearVideos();
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
            this.props.clearVideos();
            this.props.fetchVideo(this.props.match.params.videoId);
        }
    }

    formatDate() {
        let date = new Date(this.props.video.createdAt);
        date = date.toString().split(" ");
        return date[1] + " " + date[2] + ", " + date[3];
    }

    handleEditLink() {
        this.props.history.push(`/videos/${this.props.match.params.videoId}/edit`);
    }

    render() {

        if (this.props.video === undefined) {
            return null;
        } else {
            let descriptionButton;
            if (this.props.currentUser && this.props.currentUser.id === this.props.video.uploaderId) {
                descriptionButton = (<button className="edit-btn" onClick={this.handleEditLink}>EDIT VIDEO</button>);
            }
            return (
                <div className="video-show-container">
                    <div className="video-show">
                        <div className="video-container">
                            <video controls autoPlay muted>
                                <source src={this.props.video.videoUrl} type="video/mp4"></source>
                            </video>
                        </div>
                       
                        <div className="title-container">
                            <h2>{this.props.video.title}</h2>
                        </div>

                        <div className="description-container">
                            <div className="top-row">
                                <div className="top-row-left">
                                    <button className="user-pic-show">{this.props.uploader.first_name.slice(0, 1).toUpperCase()}</button>
                                    <div className="upload-info">
                                        <p className="uploader-name">{this.props.uploader.first_name}</p>
                                        <p>Published on {this.formatDate()}</p>
                                    </div>
                                </div>
                                <div className="description-btn-container">
                                    {descriptionButton}
                                </div>
                            </div>
                            <p className="description">{this.props.video.description}</p>
                        </div>

                    </div>

                    {/* <div className="up-next-container">
                        Up next
                        <VideoItem video={this.props.video} isColumn={true}/>
                    </div> */}

                </div>
            )

        }
    }
}

export default withRouter(VideoShow);