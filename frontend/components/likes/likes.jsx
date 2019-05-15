import React from 'react';
import { connect } from 'react-redux';
import { createLike, deleteLike } from '../../actions/like_actions';


const mapStateToProps = (state, ownProps) => {
    return {
        currentUserId: state.session.currentUser,
        likes: Object.values(state.entities.likes)
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
            like: {
                liked: null,
                likeable_type: this.props.likeable_type,
                likeable_id: this.props.likeable_id,
                user_id: this.props.currentUserId
            },
            sumLikes: this.props.sumLikes,
            sumDislikes: this.props.sumDislikes
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLike = this.handleLike.bind(this);
        if (this.props.likeable_type === "Video") {
            this.btnClass = "video-like";
            this.dislikesContainer = "dislikes-container";
        } else {
            this.btnClass = "comment-like";
            this.dislikesContainer = "comment-dislikes-container";
        }
    }

    componentDidMount() {

        const likedThing = this.props.likes.filter(like => like.likeableType === this.props.likeable_type && like.likeableId === this.props.likeable_id);
        console.log(likedThing);

        
        if (this.props.likes[this.state.like.likeable_id]) {
            console.log(this.props.likes[this.state.like.likeable_id]);
        }
    }


    handleLike(type) {
        if (!this.props.currentUserId) {
            return;
        }
        //Check if like already exists for current user
        const likedFeature = this.props.likes.filter(like => like.likeableType === this.props.likeable_type && like.likeableId === this.props.likeable_id)[0];
        console.log(likedFeature);

        if (likedFeature) {
            if (type === true && likedFeature.liked === true) {
                this.setState({ like: { ...this.state.like, liked: null } }, () => this.props.deleteLike(likedFeature));
                // this.props.deleteLike(likedFeature);
                this.setState({sumLikes: --this.state.sumLikes});
            } else if (type === true && likedFeature.liked === false) {
                this.setState({ like: { ...this.state.like, liked: type } }, () => this.props.createLike(this.state.like));
                this.setState({ 
                    sumLikes: ++this.state.sumLikes, 
                    sumDislikes: --this.state.sumDislikes
                });
            } else if (type === false && likedFeature.liked === true) {
                this.setState({ like: { ...this.state.like, liked: type } }, () => this.props.createLike(this.state.like));
                this.setState({
                    sumLikes: --this.state.sumLikes,
                    sumDislikes: ++this.state.sumDislikes
                });
            } else if (type === false && likedFeature.liked === false) {
                this.setState({ like: { ...this.state.like, liked: null } }, () => this.props.deleteLike(likedFeature));
                this.setState({ sumDislikes: --this.state.sumDislikes });
            }
        } else {
            this.setState({ like: { ...this.state.like, liked: type } }, () => this.props.createLike(this.state.like));
            if (type) {
                this.setState({ sumLikes: ++this.state.sumLikes });
            } else {
                this.setState({ sumDislikes: --this.state.sumDislikes });
            }
        }

        // this.setState({ like: { ...this.state.like, liked: type } }, () => this.props.createLike(this.state));
        // this.setState({ liked: type }, () => this.props.createLike(this.state));
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
                    <span className="like-amount">{this.state.sumLikes}</span>
                </div>
                <div className={this.dislikesContainer}>
                    <button className={this.btnClass} onClick={() => this.handleLike(false)}><i className="fas fa-thumbs-up fa-rotate-180"></i></button>
                    {this.props.likeable_type === "Video" ? (
                        <span className="like-amount">{this.state.sumDislikes}</span>
                    ) : (
                        <></>
                    )}
                </div>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);