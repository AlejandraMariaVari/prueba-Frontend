import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

// Styles
import './ProductRow.css'
import '../../../styles/utilities.css'

import testImage from '../../../assets/test-image.png'

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

  console.log('items', items)

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
