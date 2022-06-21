import React, { useEffect, useState, useContext } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { formatNumber } from '../../../utils/formatNumber'

// Styles
import './ProductRow.scss'
import '../../../styles/utilities.scss'

// Services
import * as API from '../../../services/getItems'

// Components
import BreadCrumb from '../../BreadCrumb/BreadCrumb'

// Api context
import { AppContext } from '../../../application/Provider'

function ProductRow() {
  const [searchParams] = useSearchParams()
  const [items, setItems] = useState([])
  const { categories, setCategories } = useContext(AppContext)

  const keyword = searchParams.get('search')

  useEffect(() => {
    API.getItemsByKeyword(keyword)
      .then((response) => {
        setItems(response.data?.items)
        setCategories(response.data?.categories)
      })
      .catch((error) => {
        alert('Ha ocurrido un error, por favor intenta ingresar más tarde')
        console.log('Error al hacer la petición al servicio', error)
      })
  }, [keyword])

  // filterItems saves the first 4 products
  const filterItems = items?.slice(0, 4)

  const listProducts = filterItems?.map((product) => (
    <Link
      key={product.id}
      to={`/items/${product.id}`}
      style={{ textDecoration: 'none' }}
    >
      <article className="product-container">
        <section className="productrow">
          <div className="align-left">
            <div className="productrow-image">
              <img src={product.picture} alt="product-image" />
            </div>
            <div className="productrow-info">
              <div className="price">
                {product.price.amount ? formatNumber(product.price.amount) : 0}
              </div>
              <p>{product.title}</p>
            </div>
          </div>
          <div className="align-right">{product.city}</div>
        </section>
      </article>
    </Link>
  ))

  return (
    <>
      <BreadCrumb categories={categories} />
      {items?.length > 0 ? listProducts : <div>Loading...</div>}
    </>
  )
}

export default ProductRow
