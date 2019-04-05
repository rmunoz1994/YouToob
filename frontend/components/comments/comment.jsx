import React from 'react';
import CommentForm from './comment_form';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            replying: false,
            viewReplies: false
        };
        this.setReplyTrue = this.setReplyTrue.bind(this);
        this.toggleReply = this.toggleReply.bind(this);
        this.toggleChildren = this.toggleChildren.bind(this);
    }

    formatTimeDifference() {
        let today = new Date();
        let uploadDate = new Date(this.props.comment.createdAt);
        let timeDiff = Math.abs(today.getTime() - uploadDate.getTime());
        let result = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return result.toString() + " day ago";
    }

    setReplyTrue() {
        this.setState({ replying: true });
    }

    toggleReply() {
        if (!this.state.replying) {
            this.setState({ replying: true });
        } else {
            this.setState({ replying: false });
        }  
    }

    toggleChildren() {
        if (!this.state.viewReplies) {
            this.setState({ viewReplies: true });
        } else {
            this.setState({ viewReplies: false });
        }  
    }

    render() {
        // let userPic;
        // if (this.props.currentUser) {
        //     userPic = ();
        // } else {
        //     userPic = (<button className="user-pic-author"></button>);
        // }
        let commentBody;
        let commentDate;
        let commentAuthor;
        if (this.props.comment) {
            commentBody = this.props.comment.body;
            commentDate = this.formatTimeDifference();
            commentAuthor = `${this.props.author.first_name} ${this.props.author.last_name}`;
        } else {
            commentBody = (<></>);
            commentDate = (<></>);
            commentAuthor = (<></>);
        }
        return (
            <div className="comment-container">
                {/* <button className="user-pic-author">{this.props.user.first_name.slice(0, 1).toUpperCase()}</button> */}
                <button className="user-pic-author">{commentAuthor.slice(0, 1).toUpperCase()}</button>
                <div className="comment-right">
                    <div className="main-comment">
                        <div className="comment-info">
                            <span className="comment-author">{commentAuthor}</span>
                            <span className="comment-date">{commentDate}</span>
                        </div>
                        <p className="comment-body">
                            {commentBody}
                        </p>
                        <div className="comment-action">
                            <button className="comment-like"><i className="fas fa-thumbs-up"></i></button>
                            <button className="comment-like"><i className="fas fa-thumbs-up fa-rotate-180"></i></button>
                            <button className="reply-btn" onClick={this.setReplyTrue}>REPLY</button>
                        </div>
                    </div>
                    {this.state.replying ? (
                        <CommentForm
                            currentUser={this.props.currentUser}
                            videoId={this.props.videoId}
                            handler={this.handler}
                            history={this.props.history}
                            replying={true}
                            toggleReply={this.toggleReply}
                        />
                    ) : (
                        <>
                        </>
                    )}
                    <div className="reply-dropdown-container">
                        
                        {!this.state.viewReplies ? (
                            <div className="reply-dropdown" onClick={this.toggleChildren}>
                                <div>View replies</div>
                                <i id="comment-drop-icon" className="fas fa-angle-down"></i>
                                {/* <i id="comment-drop-icon" className="fas fa-caret-down"></i> */}
                            </div>
                        ) : (
                            <div className="reply-dropdown" onClick={this.toggleChildren}>
                                <div>Hide replies</div>
                                <i id="comment-drop-icon-up" className="fas fa-angle-up"></i>
                            </div>
                        )}
                    </div>
                </div>
                <div className="comment-action-menu">
                    <div className="action-icon">
                        <button className="nav-bar-button">
                            <i id="icon" className="fas fa-ellipsis-v"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Comment;