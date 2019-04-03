import React from 'react';

class VideoUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            videoFile: null,
            thumbnailFile: null,
            firstForm: true
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        // this.handleFile = this.handleFile.bind(this);
    }

    handleInput(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    handleFile(field) {
        return (e) => {
            this.setState({[field]: e.currentTarget.files[0]});
            if (field === "videoFile") {
                this.toggleForm();
            } 
        };
    }

    toggleForm(e) {
        this.setState({firstForm: !this.state.firstForm});
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        formData.append('video[uploader_id]', this.props.currentUserId);
        if (this.state.videoFile) {
            formData.append('video[videoUrl]', this.state.videoFile);
        }
        if (this.state.thumbnailFile) {
            formData.append('video[thumbnailUrl]', this.state.thumbnailFile);
        }
        this.props.uploadVideo(formData).then(video => this.props.history.push('/'));
    }

    renderErrors() {
        return (
            <ul className="error-list">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        <i className="fas fa-exclamation-circle"></i>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        // let form;
        // if (this.state.firstForm) {
        //     form = (
        //         <form className="upload-prompt">
        //             {/* <i id="upload-icon" className="fas fa-arrow-circle-up"></i> */}
        //             <div className="upload-text">Select files to upload</div>
        //             <input type="file" accept="video/mp4,video/*" onChange={this.handleFile("videoFile")} />
        //         </form>
        //     );
        // } else {
        //     form = (
        //         <form onSubmit={this.handleSubmit} className="upload-prompt">
        //             <input type="file" accept="image/*" onChange={this.handleFile("thumbnailFile")} />
        //             <input className="title-input" type="text" value={this.state.title} onChange={this.handleInput("title")} />
        //             <textarea className="description-input" value={this.state.description} onChange={this.handleInput("description")} />
        //             <input className="edit-btn" type="submit" value="Publish" />
        //         </form>
        //     );
        // }

        return (
            <div className="upload-page">
                <div className="upload-container">
                    <form onSubmit={this.handleSubmit} className="upload-prompt">
                        {this.state.firstForm ? (
                            <>
                                <div className="upload-text">Select files to upload</div>
                                <input type="file" accept="video/mp4,video/*" onChange={this.handleFile("videoFile")} />
                            </>
                        ) : (
                            <>
                                <input type="file" accept="image/*" onChange={this.handleFile("thumbnailFile")} />
                                <input className="title-input" type="text" onChange={this.handleInput("title")} />
                                <textarea className="description-input" onChange={this.handleInput("description")} />
                                <input className="edit-btn" type="submit" value="Publish" />
                            </>
                        )}       
                    </form>
                    {this.renderErrors()}
                </div>
            </div>
        )
        // return (
        //     <div className="upload-page">
        //         <div className="upload-container">
        //             {form}
        //             {this.renderErrors()}
        //         </div>
        //     </div>
        // )
    }

}

export default VideoUpload;