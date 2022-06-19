import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

// Styles
import './ProductRow.css'
import '../../../styles/utilities.css'

// Services
import * as API from '../../../services/getItems'

function ProductRow() {
  const [searchParams] = useSearchParams()
  const [items, setItems] = useState([])
  const keyword = searchParams.get('search')

  useEffect(() => {
    API.getItemsByKeyword(keyword)
      .then((response) => {
        setItems(response.data.items)
      })
      .catch((error) => {
        console.log('Error al hacer la petición al servicio', error)
      })
  }, [keyword])

  // filterItems saves the first 4 products
  const filterItems = items.slice(0, 4)

  const listProducts = filterItems.map((product) => (
    <article key={product.id} className="product-container">
      <section className="productrow">
        <div className="align-left">
          <div className="productrow-image">
            <img src={product.picture} alt="product-image" />
          </div>
          <div className="productrow-info">
            <div className="price">$ {product.price.amount}</div>
            <p>{product.title}</p>
          </div>
        </div>
        <div className="align-right">{product.city}</div>
      </section>
    </article>
  ))

  return <>{listProducts}</>
}

export default ProductRow
