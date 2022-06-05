import React from 'react'
import './ProductContainer.css'

// Components
import ProductRow from './ProductRow/ProductRow'

function ProductContainer() {
  return (
    <article className="product-container">
      <ProductRow />
    </article>
  )
}

export default ProductContainer
