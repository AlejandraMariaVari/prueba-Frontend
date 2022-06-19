import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './Layout.css'

// Components
import SearchBar from '../components/SearchBar/SearchBar'
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'
import ProductDetail from '../components/ProductContainer/ProductRow/ProductDetail/ProductDetail'
import ProductRow from '../components/ProductContainer/ProductRow/ProductRow'

function Layout() {
  return (
    <div className="layout">
      <SearchBar />
      <div className="layout-content">
        <BreadCrumb />
        <Routes>
          <Route path="/items/" element={<ProductRow />} />
          <Route path="/items/:productId" element={<ProductDetail />} />
        </Routes>
      </div>
    </div>
  )
}

export default Layout
