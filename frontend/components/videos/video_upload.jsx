import React from 'react';

class VideoUpload extends React.Component {

    constructor(props) {
        super(props);
        console.log("Video Upload Constructor");
        this.state = {
            title: '',
            description: '',
            videoFile: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleInput(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    handleFile(e) {
        this.setState({videoFile: e.currentTarget.files[0]});
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        formData.append('video[uploader_id]', this.props.currentUserId);
        formData.append('video[videoUrl]', this.state.videoFile);
        debugger
        this.props.uploadVideo(formData);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="upload-page">
                <div className="upload-container">
                    <form onSubmit={this.handleSubmit} className="upload-prompt">
                        <i id="upload-icon" className="fas fa-arrow-circle-up"></i>
                        <div className="upload-text">Select files to upload</div>
                        <input type="file" onChange={this.handleFile}/>
                        <input type="text" value={this.state.title} onChange={this.handleInput("title")}/>
                        <textarea value={this.state.description} onChange={this.handleInput("description")}/>
                        <input type="submit" value="Publish"/>
                    </form>
                </div>
            </div>
        )
    }

}

export default VideoUpload;