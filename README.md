# YouToob

[YouToob Live Link](http://youtoob-rm.herokuapp.com/#/)

YouToob is a single-page YouTube clone application.

## Technologies
 * Ruby on Rails
 * React
 * Redux
 * PostgreSQL
 * Amazon Web Services S3

## Overview
 * User authentication
 * Video upload and editing
 * Commenting on videos and replying to comments
 * Polymorphic association for likes on videos and comments
 * Search by title
 
## Highlighted Features
### Polymorphic Likes
A logged in user has the ability to like both videos and comments through a polymorphic association. In order to keep the code DRY, there is only a single likes component file that is used for both videos and comments.
```javascript
render() {
    const likedFeature = this.props.likes.filter(like => like.likeableType === this.props.likeable_type && like.likeableId === this.props.likeable_id)[0];
    return (
        <>
            <div className={`likes-container ${likedFeature && likedFeature.liked === true ? "selected" : ""}`}>
                <button className={`${this.likeBtnLeft} like-button`} onClick={() => this.handleLike(true, likedFeature)}><i className="fas fa-thumbs-up"></i></button>
                {this.state.sumLikes === 0 && this.props.likeable_type === "Comment" ? (<></>) : (
                    <span className="like-amount">{this.state.sumLikes}</span>
                )}
            </div>
            <div className={`${this.dislikesContainer} ${likedFeature && likedFeature.liked === false ? "selected" : ""}`}>
                <button className={`${this.likeBtnRight} like-button`} onClick={() => this.handleLike(false, likedFeature)}><i className="fas fa-thumbs-up fa-rotate-180"></i></button>
                {this.props.likeable_type === "Video" ? (
                    <span className="like-amount">{this.state.sumDislikes}</span>
                ) : (
                    <></>
                )}
            </div>
            {this.props.likeable_type === "Comment" ? null : (
                <div className={`like-bar-container ${likedFeature ? "selected" : ""}`}>
                    <div className="like-bar" style={this.likeBarStyle}>
                    </div>        
                </div>
            )}
        </>
    )
}
```

## Future Features
 * Views
 * Channels/Subscriptions
 * Playlists
 * Automated Thumbnail Generation



