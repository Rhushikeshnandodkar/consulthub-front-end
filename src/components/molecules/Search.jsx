import React from 'react'
import { SearchStyle } from './molecule.style'
function Search() {
  return (
    <SearchStyle>
    <div>
      <div className="search-bar">
        <div className="search-field">
            <input type="text" placeholder='Search anything....'/>
        </div>
        <div className="button-section"><button className='btn'>Search</button></div>
      </div>
    </div>
    </SearchStyle>
  )
}

export default Search
