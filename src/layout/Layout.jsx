import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './Layout.scss'
import Provider from '../application/Provider'

// Components
import SearchBar from '../components/SearchBar/SearchBar'
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'
import ProductDetail from '../components/ProductContainer/ProductRow/ProductDetail/ProductDetail'
import ProductRow from '../components/ProductContainer/ProductRow/ProductRow'

function Layout() {
  return (
    <Provider>
      <div className="layout">
        <SearchBar />
        <div className="layout-content">
          <Routes>
            <Route path="/" element={<BreadCrumb />} />
            <Route path="/items/" element={<ProductRow />} />
            <Route path="/items/:productId" element={<ProductDetail />} />
          </Routes>
        </div>
      </div>
    </Provider>
  )
}

export default Layout
