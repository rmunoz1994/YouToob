import React from 'react';
import { connect } from 'react-redux';
import { updateComment, deleteComment } from '../../actions/comment_actions';

// const mapStateToProps = state => ({
//     errors: errors.session,
//     formType: "email"
// });

const mapDispatchToProps = dispatch => ({
    updateComment: comment => dispatch(updateComment(comment)),
    deleteComment: comment => dispatch(deleteComment(comment))
});


class CommentPopup extends React.Component {


    render() {
        return (
            <div className="comment-popup-container">
                <div className="comment-popup">
                    <div className="comment-popup-item">
                        Edit
                    </div>
                    <div className="comment-popup-item">
                        Delete
                    </div>
                </div>
            </div>
        )
    }

}


export default connect(null, mapDispatchToProps)(CommentPopup);