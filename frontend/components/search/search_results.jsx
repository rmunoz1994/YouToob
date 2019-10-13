import React from 'react';
import SearchItem from './search_item';

class SearchResults extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.clearVideos();
        this.props.fetchVideos({search: this.props.search});
    }
    componentDidUpdate(prevProps) {
        if (prevProps.location.search !== this.props.location.search) {
            window.scrollTo(0, 0);
            this.props.fetchVideos({ search: this.props.location.search.slice(14).split(" ").join("+") });
        }
    }

    render() {
        let searchResultItems;
        let message;
        const searchTerm = this.props.search.split("+").join(" ");
        if (this.props.videos.length > 0) {
            searchResultItems = this.props.videos.map((video, idx) => {
                let channel = this.props.channels[video.channelId];
                return (
                    <SearchItem key={idx} video={video} channel={channel} history={this.props.history}/>
                )
            });
            message = `Search results for "${searchTerm}"`;
        } else {
            searchResultItems = "";
            message = `Search for "${searchTerm}" returned no results`;
        }
        return (
            <div className="search-results-container">
                <div className="search-results-list">
                    <div className="search-results-header">
                        <h3>{message}</h3>
                    </div>
                    <div className="search-results">
                        {searchResultItems}
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchResults;