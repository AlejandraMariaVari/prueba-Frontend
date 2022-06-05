import React from 'react'
import './Layout.css'

// Components
import SearchBar from '../components/SearchBar/SearchBar'
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'
import ProductContainer from '../components/ProductContainer/ProductContainer'

function Layout() {
  return (
    <div className="layout">
      <SearchBar />
      <div className="layout-content">
        <BreadCrumb />
        <ProductContainer />
      </div>
    </div>
  )
}

export default Layout
