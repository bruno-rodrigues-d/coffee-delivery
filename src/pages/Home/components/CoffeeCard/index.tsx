import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../../../contexts/CartContext'
import {
  CoffeeCardContainer,
  PriceContainer,
  Price,
  Quantity,
  Cart,
  Count,
  Type,
} from './styles'

export interface CoffeeListArrayType {
  id: number
  image: string
  type: string[]
  name: string
  description: string
  price: number
}

interface CoffeeListArrayProps {
  item: CoffeeListArrayType
}

export function CoffeeCard({ item }: CoffeeListArrayProps) {
  const { addCartItem, removeCartItem, coffeeSelected } =
    useContext(CartContext)

  function handleCoffeeAdded() {
    addCartItem(item)
  }

  function handleCoffeeSubtracted() {
    removeCartItem(item)
  }

  const countItem = coffeeSelected

  console.log(countItem.length)

  return (
    <CoffeeCardContainer>
      <img src={item.image} alt="Tipo de café" />
      <Type>
        {item.type.map((type) => {
          return <span key={type}>{type}</span>
        })}
      </Type>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <PriceContainer>
        <Price>
          <p>R$</p>
          <span>{item.price}</span>
        </Price>

        <Quantity>
          <Count>
            <button onClick={handleCoffeeSubtracted}>
              <Minus size={16} />
            </button>
            <span>{countItem.length}</span>
            <button onClick={handleCoffeeAdded}>
              <Plus size={16} />
            </button>
          </Count>
          <NavLink to="/checkout" title="Checkout">
            <Cart>
              <ShoppingCart size={24} color="#FFF" weight="fill" />
            </Cart>
          </NavLink>
        </Quantity>
      </PriceContainer>
    </CoffeeCardContainer>
  )
}
