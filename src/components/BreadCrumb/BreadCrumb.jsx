import React from 'react'
import './BreadCrumb.css'

import flow from '../../assets/flow.png'

function BreadCrumb() {
  return (
    <nav className="breadcrumb">
      <ul className="breadcrumb-list">
        <li className="breadcrumb-list__item">
          <a href="#">Electrónica, audio y video</a>
          <div className="breadcrumb-list__icon">
            <img src={flow} alt="flow" />
          </div>
        </li>
        <li className="breadcrumb-list__item">
          <a href="#">ipod</a>
          <div className="breadcrumb-list__icon">
            <img src={flow} alt="flow" />
          </div>
        </li>
        <li className="breadcrumb-list__item">
          <a href="#">Reproductores</a>
          <div className="breadcrumb-list__icon">
            <img src={flow} alt="flow" />
          </div>
        </li>
        <li className="breadcrumb-list__item">
          <a href="#">ipod touch</a>
          <div className="breadcrumb-list__icon">
            <img src={flow} alt="flow" />
          </div>
        </li>
        <li className="breadcrumb-list__item">
          <a href="#">32 GB</a>
        </li>
      </ul>
    </nav>
  )
}

export default BreadCrumb
