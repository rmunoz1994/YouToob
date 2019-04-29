import React from 'react';
import { connect } from 'react-redux';
import { createLike, deleteLike } from '../../actions/like_actions';


const mapStateToProps = (state, ownProps) => {
    return {
        currentUserId: state.session.currentUser,
    };
};

const mapDispatchToProps = dispatch => ({
    createLike: like => dispatch(createLike(like)),
    deleteLike: like => dispatch(deleteLike(like))
});

class Likes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            liked: null,
            likeable_type: this.props.likeable_type,
            likeable_id: this.props.likeable_id,
            user_id: this.props.currentUserId
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLike = this.handleLike.bind(this);
        if (this.props.likeable_type === "Video") {
            this.btnClass = "video-like";
        } else {
            this.btnClass = "comment-like";
        }
    }


    handleLike(type) {
        if (!this.props.currentUserId) {
            return;
        }

        this.setState({ liked: type }, () => this.props.createLike(this.state));
    }

    handleSubmit() {
        
        this.props.createLike(this.state);
    }

    render() {
        const total = this.state.likes + this.state.dislikes;
        return (
            <>
                <div className="likes-container">
                    <button className={this.btnClass} onClick={() => this.handleLike(true)}><i className="fas fa-thumbs-up"></i></button>
                    <span className="like-amount">{this.props.likes}</span>
                </div>
                <div className="dislikes-container">
                    <button className={this.btnClass} onClick={() => this.handleLike(false)}><i className="fas fa-thumbs-up fa-rotate-180"></i></button>
                    <span className="like-amount">{this.props.dislikes}</span>
                </div>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);