import React from 'react';

class Search extends React.Component {

    render() {
        return (
            <div className="search-bar-container">
                <form className="search-form">
                    <input type="text" placeholder="Search" className="search-input" />
                    <button className="search-btn">
                        <i id="search-icon" className="fas fa-search"></i>
                    </button>
                </form>
            </div>
        )
    }
}

export default Search;