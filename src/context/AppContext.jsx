import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [frequency, setFrequency] = useState(432)
  const [cart, setCart] = useState([])
  const [posts, setPosts] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId))
  }

  const createPost = (postData) => {
    const newPost = {
      id: Date.now(),
      ...postData,
      timestamp: new Date(),
      likes: 0,
      comments: 0
    }
    setPosts([newPost, ...posts])
  }

  const value = {
    user,
    setUser,
    frequency,
    setFrequency,
    cart,
    addToCart,
    removeFromCart,
    posts,
    createPost
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}
