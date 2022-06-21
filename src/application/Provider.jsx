import { createContext, useState } from 'react'

const Provider = ({ children }) => {
  const [categories, setCategories] = useState([])
  return (
    <AppContext.Provider value={{ categories, setCategories }}>
      {children}
    </AppContext.Provider>
  )
}

export default Provider
export const AppContext = createContext()
