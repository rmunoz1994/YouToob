import React from 'react';
import SearchItem from './search_item';

class SearchResults extends React.Component {

    componentDidMount() {
        this.props.clearVideos();
        this.props.fetchVideos({search: this.props.search});
    }
    componentDidUpdate(prevProps) {
        if (prevProps.location.search !== this.props.location.search) {
            this.props.fetchVideos({ search: this.props.location.search.slice(14).split(" ").join("+") });
        }
    }

    render() {
        let searchResultItems;
        if (this.props.videos.length > 0) {
            searchResultItems = this.props.videos.map((video, idx) => {
                let user = this.props.users[video.uploaderId];
                return (
                    <SearchItem key={idx} video={video} user={user}/>
                )
            });
        } else {
            searchResultItems = "";
        }
        return (
            <div className="search-results-container">
                <div className="search-results-list">
                    <div className="search-results-header"></div>
                    <div className="search-results">
                        {searchResultItems}
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchResults;