import { useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './SearchBar.scss'
import '../../layout/Layout.scss'

// Images
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'

function SearchBar() {
  const navegateTo = useNavigate()
  const keywordInput = useRef(null)

  function searchProduct() {
    const keyword = keywordInput.current.value

    navegateTo({
      pathname: '/items',
      search: `?search=${keyword}`,
    })
  }

  return (
    <>
      <header>
        <div className="searchbar">
          <Link to={'/'}>
            <img alt="logo" src={logo} />
          </Link>
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
    </>
  )
}

export default SearchBar
