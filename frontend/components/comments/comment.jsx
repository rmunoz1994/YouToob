import React from 'react';

class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    formatTimeDifference() {
        let today = new Date();
        let uploadDate = new Date(this.props.comment.createdAt);
        let timeDiff = Math.abs(today.getTime() - uploadDate.getTime());
        let result = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return result.toString() + " day ago";
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
            commentAuthor = this.props.comment.author;
        } else {
            commentBody = (<></>);
            commentDate = (<></>);
            commentAuthor = (<></>);
        }
        return (
            <div className="comment-container">
                {/* <button className="user-pic-author">{this.props.user.first_name.slice(0, 1).toUpperCase()}</button> */}
                <button className="user-pic-author">{"Bob".slice(0, 1).toUpperCase()}</button>
                <div className="comment-right">
                    <div className="main-comment">
                        <div className="comment-info">
                            <span className="comment-author">{commentAuthor}</span>
                            <span className="comment-date">{commentDate}</span>
                        </div>
                        <p className="comment-body">
                            {commentBody}
                            {/* This is a test comment


                            More white space. */}
                        </p>
                        <div className="comment-action">
                            <button className="comment-like"><i className="fas fa-thumbs-up"></i></button>
                            <button className="comment-like"><i className="fas fa-thumbs-up fa-rotate-180"></i></button>
                            <button className="reply-btn">REPLY</button>
                        </div>
                    </div>
                    <div className="reply-dropdown-container">
                        <div className="reply-dropdown">
                            <div>View replies</div>
                            <i id="comment-drop-icon" className="fas fa-caret-down"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Comment;