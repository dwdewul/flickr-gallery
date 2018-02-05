import React from 'react'

const SearchForm = props => {
    return (
        <div>
          <form onSubmit={(e) => props.onSearch(e)}>
          <label htmlFor="search">Search</label>
            <input type="text"
            id="search"
            />
            <button type="submit">Click Me</button>
          </form>
        </div>
    );
}

export default SearchForm;