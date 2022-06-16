import React from 'react'

// Styles
import './ProductRow.css'
import '../../../styles/utilities.css'

import testImage from '../../../assets/test-image.png'

function ProductRow({ items }) {
  console.log('items component product row', items)
  return (
    <article className="product-container">
      <section className="productrow">
        <div className="align-left">
          <div className="productrow-image">
            <img src={testImage} alt="product-image" />
          </div>
          <div className="productrow-info">
            <div className="price">$ 1.980</div>
            <p>Apple ipod touch 5g 16gb Negro igual A Nuevo completo único!</p>
          </div>
        </div>
        <div className="align-right">Capital Federal</div>
      </section>
    </article>
  )
}

export default ProductRow
