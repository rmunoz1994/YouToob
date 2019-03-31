import React from 'react';

class VideoIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchVideos();
    }

    render() {
        if (this.props.videos[0] === undefined) {
            return null;
        } else {
            return (
                <div>
                    <img src={this.props.videos[0].thumbnail} />
                </div>
            )
        }
    }
}

export default VideoIndex;