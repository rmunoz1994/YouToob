import React from 'react';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    render() {
        if (this.props.video === undefined) {
            return null;
        } else {
            return (
                <div className="video-show-container">
                    <div className="video-show">
                        <div className="video-container">
                            <button className="video-area-test">Test</button>
                            {/* <img src={this.props.video.thumbnailUrl} /> */}
                        </div>
                        <div className="title-container">
                            <h2>{this.props.video.title}</h2>
                        </div>
                        <div className="description-container">
                            <p>{this.props.video.description}</p>
                        </div>
                    </div>
                    <div className="up-next-container">
                    </div>
                </div>
            )

        }
    }
}

export default VideoShow;