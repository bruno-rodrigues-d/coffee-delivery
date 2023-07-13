import { createContext, ReactNode, useCallback, useMemo } from 'react'
import { coffees } from '../data/coffees'
import { useLocalStorageState } from '../hooks/useLocalStorageState'

export interface CoffeeListArrayType {
  id: number
  image: string
  type: string[]
  name: string
  description: string
  price: number
}

interface CartItem {
  quantity: number
  coffeeId: CoffeeListArrayType['id']
}

interface FullCartItem {
  quantity: number
  coffee: CoffeeListArrayType
}

interface CartContextType {
  items: FullCartItem[]
  addItemToCart: (quantity: number, coffeeId: CoffeeListArrayType['id']) => void
  removeItemFromCart: (coffeeId: CoffeeListArrayType['id']) => void
  clearCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [items, setItems] = useLocalStorageState<CartItem[]>(
    '@coffee-delivery:cart-0.1.0',
    [],
  )

  const addItemToCart: CartContextType['addItemToCart'] = useCallback(
    (quantity, coffeeId) => {
      if (coffees.findIndex((coffee) => coffee.id === coffeeId) < 0) {
        throw new Error('ID inexistente')
      }

      setItems((items) => {
        const copy = [...items]

        const existingItemIndex = copy.findIndex(
          (item) => item.coffeeId === coffeeId,
        )

        if (existingItemIndex >= 0) {
          copy[existingItemIndex].quantity = quantity
        } else {
          copy.push({
            quantity,
            coffeeId,
          })
        }

        return copy
      })
    },
    [setItems],
  )

  const removeItemFromCart: CartContextType['removeItemFromCart'] = useCallback(
    (coffeeId) => {
      setItems((items) => {
        return items.filter((item) => item.coffeeId !== coffeeId)
      })
    },
    [setItems],
  )

  const clearCart: CartContextType['clearCart'] = useCallback(() => {
    setItems([])
  }, [setItems])

  const fullItems = useMemo((): FullCartItem[] => {
    return items
      .filter((item) => coffees.some((coffee) => coffee.id === item.coffeeId))
      .map((item) => ({
        quantity: item.quantity,
        coffee: coffees.find((coffee) => coffee.id === item.coffeeId)!,
      }))
  }, [items])

  return (
    <CartContext.Provider
      value={{
        items: fullItems,
        addItemToCart,
        removeItemFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
