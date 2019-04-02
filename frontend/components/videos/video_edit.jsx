import React from 'react';
import { withRouter } from 'react-router-dom';

class VideoEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.video.title,
            description: this.props.video.description,
            thumbnailFile: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        // this.handleFile = this.handleFile.bind(this);
    }

    // componentDidMount() {
    //     this.props.fetchVideo(this.props.match.params.videoId);
    // }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleFile(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.files[0] });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('video[id]', this.props.match.params.videoId);
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        if ( this.state.thumbnailFile) {
            formData.append('video[thumbnailUrl]', this.state.thumbnailFile);
        }
        this.props.updateVideo(formData);
        this.props.history.push('/index');
    }

    handleDelete() {
        this.props.deleteVideo(this.props.video);
        this.props.history.push('/index');
    }

    handleCancel() {
        this.props.history.push('/index');
    }

    render() {
        if (this.props.video) {
            return (
                <div className="upload-page">
                    <div className="edit-container">
                        <form onSubmit={this.handleSubmit} className="upload-prompt">
                            <div className="upload-text">Edit your video</div>
                            <input type="file" onChange={this.handleFile("thumbnailFile")} />
                            <div className="title-input-edit">
                                <label htmlFor="title">Title</label>
                                <textarea name="title" placeholder="Add title" value={this.state.title} onChange={this.handleInput("title")} />
                            </div>
                            <div className="description-input-edit">
                                <label htmlFor="description">Description</label>
                                <textarea name="Description" value={this.state.description} onChange={this.handleInput("description")} />
                            </div>
                            <div className="edit-btn-row">
                                <input className="edit-btn" type="submit" value="SAVE" />
                                <button type="button" className="edit-btn" onClick={this.handleDelete}>DELETE</button>
                                <button type="button" className="edit-btn" onClick={this.handleCancel}>CANCEL</button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }

}

export default withRouter(VideoEdit);