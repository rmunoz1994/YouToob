import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let userPic;
        if (this.props.currentUser) {
            userPic = (<button className="user-pic-author">{this.props.currentUser.first_name.slice(0, 1).toUpperCase()}</button>);
        } else {
            userPic = (<button className="user-pic-author"></button>);
        }
        return (
            <div className="comments-section-container">
                <div className="comments-header">
                    <div className="comment-amount">
                        13,713 Comments
                    </div>
                    <div className="comment-box-container">
                        {userPic}
                        <div className="comment-box">
                            <div className="comment-input-box">
                                <textarea className="comment-textarea" placeholder="Add a public comment..."></textarea>
                                <div className="comment-input-underline-container">
                                    <div className="comment-input-underline">
                                    </div>
                                </div>
                            </div>
                            <div className="comment-btn-row">
                                <button className="cancel-btn">CANCEL</button>
                                <button className="comment-btn">COMMENT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentForm;