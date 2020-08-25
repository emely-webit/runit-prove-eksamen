import React from 'react'
import '../layout.scss';

const Search = () => {
    return (
      <form className="col-3 d-lg-inline d-none">
        <input
          className="h-100 bg-dark text-primary px-3 border-0"
          type="submit"
          value="SØG"
        />
        <input
          className="h-80 ml-1 bg-transparent border-dark"
          type="search"
          name="search"
          id="search"
        />
      </form>
    );
}

export default Search
