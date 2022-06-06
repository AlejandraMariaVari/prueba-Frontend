import React from 'react'
import './ProductContainer.css'

// Components
import ProductRow from './ProductRow/ProductRow'
import ProductDetail from './ProductRow/ProductDetail/ProductDetail'

function ProductContainer() {
  return (
    <article className="product-container">
      {/* <ProductRow /> */}
      {/* TEST PRODUCT DETAIL */}
      <ProductDetail />
    </article>
  )
}

export default ProductContainer
