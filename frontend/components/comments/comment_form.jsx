import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            author_id: this.props.currentUser.id,
            video_id: this.props.videoId,
            parent_comment_id: null
        };
        debugger
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    formatDate() {
        let date = new Date(this.props.comment.createdAt);
        date = date.toString().split(" ");
        return date[1] + " " + date[2] + ", " + date[3];
    }

    handleInput() {
        return (e) => {
            this.setState({ body: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment(this.state);
        this.setState({body: ''});
        this.props.handler();
    }

    render() {
        let userPic;
        if (this.props.currentUser) {
            userPic = (<button className="user-pic-author">{this.props.currentUser.first_name.slice(0, 1).toUpperCase()}</button>);
        } else {
            userPic = (<button className="user-pic-author"></button>);
        }
        return (
            <div className="comment-box-container">
                {userPic}
                <div className="comment-box">
                    <form>
                        <div className="comment-input-box">
                            <textarea className="comment-textarea" placeholder="Add a public comment..." onChange={this.handleInput()}></textarea>
                            <div className="comment-input-underline-container">
                                <div className="comment-input-underline">
                                </div>
                            </div>
                        </div>
                        <div className="comment-btn-row">
                            <button type="button" className="cancel-btn">CANCEL</button>
                            <button onClick={this.handleSubmit} className="comment-btn">COMMENT</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CommentForm;