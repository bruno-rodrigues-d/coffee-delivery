import { createContext, ReactNode, useState } from 'react'

export interface CoffeeListArrayType {
  id: number
  image: string
  type: string[]
  name: string
  description: string
  price: number
}

interface CartContextType {
  coffeeSelected: CoffeeListArrayType[]
  addCartItem: (list: CoffeeListArrayType) => void
  removeCartItem: (list: CoffeeListArrayType) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffeeSelected, setCoffeeSelected] = useState<CoffeeListArrayType[]>(
    [],
  )

  function addCartItem(data: CoffeeListArrayType) {
    setCoffeeSelected((state) => [data, ...state])
  }

  function removeCartItem(data: CoffeeListArrayType) {
    const newListItems = coffeeSelected.filter((item) => item.id !== data.id)

    setCoffeeSelected(newListItems)
  }

  return (
    <CartContext.Provider
      value={{
        coffeeSelected,
        addCartItem,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
