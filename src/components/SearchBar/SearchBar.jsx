import React from 'react'
import './SearchBar.css'

// Images
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'

function SearchBar() {
  return (
    <header>
      <div className="searchbar">
        <img alt="logo" src={logo} />
        <div className="searchbar-container">
          <input type="text" placeholder="Nunca dejes de buscar" />
          <div className="searchbar-container-boxicon">
            <img alt="search" src={search} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default SearchBar
