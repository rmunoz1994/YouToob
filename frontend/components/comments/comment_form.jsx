import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            body: '',
            author_id: this.props.currentUser ? this.props.currentUser.id : null,
            video_id: this.props.videoId,
            parent_comment_id: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLink = this.handleLink.bind(this);
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
        this.props.createComment(this.state).then(() => this.props.handler());
        this.setState({body: ''});
    }

    handleLink() {
        this.props.history.push('/login');
    }

    // handleCurrentUser() {
    //     if (!this.props.currentUser) {
    //         this.props.history.push('/login');
    //     }
    // }

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
                            {this.props.currentUser ? (
                                <textarea className="comment-textarea" placeholder="Add a public comment..." value={this.state.body} onChange={this.handleInput()}></textarea>
                            ) : (
                                <textarea className="comment-textarea" placeholder="Add a public comment..." onClick={this.handleLink}></textarea>
                            )}
                            <div className="comment-input-underline-container">
                                <div className="comment-input-underline">
                                </div>
                            </div>
                        </div>
                        {this.props.currentUser ? (
                            <div className="comment-btn-row">
                                <button type="button" className="cancel-btn">CANCEL</button>
                                <button onClick={this.handleSubmit} className="comment-btn">COMMENT</button>
                            </div>
                        ) : (
                            <></>
                        )}
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(CommentForm);