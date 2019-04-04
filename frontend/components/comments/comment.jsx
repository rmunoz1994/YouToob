import React from 'react';

class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // let userPic;
        // if (this.props.currentUser) {
        //     userPic = ();
        // } else {
        //     userPic = (<button className="user-pic-author"></button>);
        // }
        return (
            <div className="comment-container">
                {/* <button className="user-pic-author">{this.props.user.first_name.slice(0, 1).toUpperCase()}</button> */}
                <button className="user-pic-author">{"Bob".slice(0, 1).toUpperCase()}</button>
                <div className="comment-right">
                    <div className="main-comment">
                        <div className="comment-info">
                        Username, 5 minutes ago
                        </div>
                        <p className="comment-body">
                        This is a test comment


                        More white space.
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