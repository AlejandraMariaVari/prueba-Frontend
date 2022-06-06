import React from 'react'
import './ProductRow.css'
import testImage from '../../../assets/test-image.png'

function ProductRow() {
  return (
    <>
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
    </>
  )
}

export default ProductRow
