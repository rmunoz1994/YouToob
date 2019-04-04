import React from 'react';
import CommentForm from './comment_form';
import Comment from './comment';

class CommentsSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="comments-section-container">
                <CommentForm currentUser={this.props.currentUser}/>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        )
    }
}

export default CommentsSection;