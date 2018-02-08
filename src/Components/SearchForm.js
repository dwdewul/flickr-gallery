import React from 'react'

const SearchForm = props => {
    return (
        <div>
          <form onSubmit={(e) => props.onSearch(e)} className="search-form">
            <input type="text"
            id="search"
            placeholder="Search..."
            onChange={(e) => props.onType(e)}
            />
            <button type="submit"><i className="fas fa-search fa-lg"></i></button>
          </form>
        </div>
    );
}

export default SearchForm;