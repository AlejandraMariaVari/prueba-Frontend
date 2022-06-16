import React from 'react'

const API_URL = 'http://localhost:4000/api/items/'

export async function getItemsByKeyword(keyword) {
  try {
    const response = await fetch(`${API_URL}?search=${keyword}`)
    const data = await response.json()
    return data
  } catch (err) {
    console.log('Ha ocurrido un error al realizar la búsqueda', err)
  }
}

export async function getItemById(itemId) {
  try {
    const response = await fetch(`${API_URL}${itemId}`)
    const data = await response.json()
    return data
  } catch (err) {
    console.log('Ha ocurrido un error al traer un item', err)
  }
}
