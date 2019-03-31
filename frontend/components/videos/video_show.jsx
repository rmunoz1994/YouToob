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
                <div>
                    <img src={this.props.video.thumbnail} />
                </div>
            )

        }
    }
}

export default VideoShow;