import React from 'react'
import './Layout.css'

// Components
import SearchBar from '../components/SearchBar/SearchBar'
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'

function Layout() {
  return (
    <div className="layout">
      <SearchBar />
      <div className="layout-content">
        <BreadCrumb />
      </div>
    </div>
  )
}

export default Layout
