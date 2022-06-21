import React from 'react'
import './BreadCrumb.scss'

import flow from '../../assets/flow.png'

function BreadCrumb({ categories }) {
  const categoriesList = categories?.map((category) => (
    <li className="breadcrumb-list__item">
      <a href="#">{category}</a>
      <div className="breadcrumb-list__icon">
        <img src={flow} alt="flow" />
      </div>
    </li>
  ))

  return (
    <nav className="breadcrumb">
      <ul className="breadcrumb-list">{categoriesList}</ul>
    </nav>
  )
}

export default BreadCrumb
