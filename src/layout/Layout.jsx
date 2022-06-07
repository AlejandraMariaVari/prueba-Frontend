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
          <Route path="/search" element={<ProductRow />} />
          <Route path="/items/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </div>
  )
}

export default Layout

// APIS DE EJEMPLO PARA MIRAR ESTRUCTURA:
// SEARCH: https://api.mercadolibre.com/sites/MLA/search?q=Motorola%20G6#json
// ITEMS: https://api.mercadolibre.com/items/MLA783905547
// DESCRIPTION: https://api.mercadolibre.com/items/MLA783905547/description
