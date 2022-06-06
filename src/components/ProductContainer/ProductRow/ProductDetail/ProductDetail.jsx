import React from 'react'

// Styles
import './ProductDetail.scss'
import '../../../../styles/utilities.css'

import imageProduct from '../../../../assets/test-product.jpg'

function ProductDetail() {
  return (
    <section className="productdetail">
      <div className="productdetail-content">
        <div className="productdetail-content__image">
          <img src={imageProduct} alt="product-image" />
        </div>
        <div className="productdetail-content__info">
          <p>Nuevo - 234 vendidos</p>
          <h2 className="title-product">Deco Reverse Sombrero Oxford</h2>
          <h2 className="price-product">$ 1.980</h2>
          <button className="button">Comprar</button>
        </div>
      </div>
      <div className="productdetail-description">
        <h3>Descripcion del producto</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At numquam
          iste dignissimos. Exercitationem pariatur quasi molestiae atque,
          accusantium nihil, explicabo harum quidem fuga soluta sit illum quo
          maxime ullam aliquid.
        </p>
      </div>
    </section>
  )
}

export default ProductDetail
