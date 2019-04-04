import React from 'react';
import CommentForm from './comment_form';
import Comment from './comment';

class CommentsSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshComments: ''
        };
        this.handler = this.handler.bind(this);
    }

    handler() {
        this.setState({refreshComments: 'refresh'});
        debugger
    }

    render() {

        // let videoGrid = this.props.videos.map((video, index) => (
        //     <VideoItem key={index} video={video} user={this.props.users[video.uploaderId]} />
        // ));
        let comments;
        if (this.props.comments) {
            comments = this.props.comments.map((comment, index) => (
                <Comment key={index} comment={comment} videoId={this.props.videoId}/>
            ));
        } else {
            return (<></>);
        }
        return (
            <div className="comments-section-container">
                <div className="comments-section-container">
                    <div className="comments-header">
                        <div className="comment-amount">
                            {`${comments.length} Comments`}
                        </div>
                        <CommentForm
                            currentUser={this.props.currentUser}
                            createComment={this.props.createComment}
                            videoId={this.props.videoId}
                            handler={this.handler}
                        />
                    </div>
                </div>
               
                {comments}
                {/* <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment /> */}
            </div>
        )
    }
}

export default CommentsSection;