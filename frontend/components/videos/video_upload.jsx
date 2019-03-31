import React from 'react';

class VideoUpload extends React.Component {

    constructor(props) {
        super(props);
        console.log("Video Upload Constructor");
    }

    render() {
        return (
            <div className="upload-page">
                <div className="upload-container">
                    <div className="upload-prompt">
                        <i id="upload-icon" className="fas fa-arrow-circle-up"></i>
                        <div className="upload-text">Select files to upload</div>
                    </div>
                </div>
            </div>
        )
    }

}

export default VideoUpload;