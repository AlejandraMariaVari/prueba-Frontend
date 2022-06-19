import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// Styles
import './ProductDetail.scss'
import '../../../../styles/utilities.css'

// Services
import * as API from '../../../../services/getItems'

function ProductDetail() {
  const { productId } = useParams()
  const [itemDetail, setItemDetail] = useState([])

  useEffect(() => {
    API.getItemById(productId)
      .then((response) => {
        setItemDetail(response.data.item[0])
      })
      .catch((error) => {
        alert('Ha ocurrido un error, por favor intenta ingresar más tarde')
        console.log('Error al hacer la petición al servicio', error)
      })
  }, [productId])

  console.log('itemdetail response', itemDetail)
  return (
    <article className="product-container">
      <section className="productdetail">
        <div className="productdetail-content">
          <div className="productdetail-content__image">
            <img src={itemDetail.picture} alt="product-image" />
          </div>
          <div className="productdetail-content__info">
            <p>
              {itemDetail.condition} - {itemDetail.sold_quantity} vendidos
            </p>
            <h2 className="title-product">{itemDetail.title}</h2>
            <h2 className="price-product">$ {itemDetail.price}</h2>
            <button className="button">Comprar</button>
          </div>
        </div>
        <div className="productdetail-description">
          <h3>Descripcion del producto</h3>
          <p>{itemDetail.description}</p>
        </div>
      </section>
    </article>
  )
}

export default ProductDetail
