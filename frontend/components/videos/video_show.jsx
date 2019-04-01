import React from 'react';
import VideoItem from './video_item';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
        this.formatDate = this.formatDate.bind(this);
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

    render() {
        if (this.props.video === undefined) {
            return null;
        } else {
            return (
                <div className="video-show-container">
                    <div className="video-show">
                        
                        <video controls autoPlay muted>
                            <source src={this.props.video.videoUrl} type="video/mp4"></source>
                        </video>
                       
                        <div className="title-container">
                            <h2>{this.props.video.title}</h2>
                        </div>

                        <div className="description-container">
                            <p>Published on {this.formatDate()}</p>
                            <p>{this.props.video.description}</p>
                        </div>

                    </div>

                    <div className="up-next-container">
                        Up next
                        <VideoItem video={this.props.video} />
                    </div>

                </div>
            )

        }
    }
}

export default VideoShow;