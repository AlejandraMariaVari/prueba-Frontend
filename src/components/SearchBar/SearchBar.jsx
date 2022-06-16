import { useEffect, useState, useRef } from 'react'
import './SearchBar.css'
import '../../layout/Layout.css'

// Services
import * as API from '../../services/getItems'

// Components
import ProductRow from '../ProductContainer/ProductRow/ProductRow'

// Images
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'

function SearchBar() {
  const [items, setItems] = useState([])
  const keywordInput = useRef(null)

  function searchProduct() {
    const keyword = keywordInput.current.value
    API.getItemsByKeyword(keyword)
      .then((response) => {
        // console.log('response api getItemsByKeyword', response.data.items)
        setItems(response.data.items)
      })
      .catch((error) => {
        console.log('Hay un error al hacer la petición al servicio', error)
      })
  }

  return (
    <>
      <header>
        <div className="searchbar">
          <img alt="logo" src={logo} />
          <div className="searchbar-container">
            <input
              ref={keywordInput}
              type="text"
              placeholder="Nunca dejes de buscar"
            />
            <button
              className="searchbar-container-boxicon"
              onClick={searchProduct}
            >
              <img alt="search" src={search} />
            </button>
          </div>
        </div>
      </header>
      {items.length != 0 ? (
        <div className="layout-content">
          <ProductRow items={items} />
        </div>
      ) : null}
    </>
  )
}

export default SearchBar
