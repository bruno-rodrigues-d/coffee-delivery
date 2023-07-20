import { Trash } from 'phosphor-react'
import { CartContext } from '../../../../contexts/CartContext'
import { useContext } from 'react'

import {
  CoffeeSelectedContainer,
  CoffeeSelectedInfo,
  CoffeeSelectedDetails,
  CoffeeSelectedActions,
  CoffeeSelectedRemove,
  Divider,
} from './styles'
import { CoffeeQuantity } from '../../../../components/CoffeeQuantity'

export interface CoffeeListArrayType {
  id: number
  image: string
  type: string[]
  name: string
  description: string
  price: number
}

interface CartItemProps {
  quantity: number
  coffee: CoffeeListArrayType
}

export function CoffeeSelected({ quantity, coffee }: CartItemProps) {
  const { addItemToCart, removeItemFromCart } = useContext(CartContext)

  function handleIncrement(quantity: number) {
    addItemToCart(quantity, coffee.id)
  }

  function handleDecrement(quantity: number) {
    addItemToCart(quantity, coffee.id)
  }

  function handleDeleteItem() {
    removeItemFromCart(coffee.id)
  }

  return (
    <>
      <CoffeeSelectedContainer key={coffee.id}>
        <CoffeeSelectedInfo>
          <img src={coffee.image} alt="" />
          <CoffeeSelectedDetails>
            <span>{coffee.name}</span>
            <CoffeeSelectedActions>
              <CoffeeQuantity
                initialQuantity={quantity}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
              />
              <CoffeeSelectedRemove onClick={handleDeleteItem}>
                <Trash size={16} color="#8047F8" />
                <span>remover</span>
              </CoffeeSelectedRemove>
            </CoffeeSelectedActions>
          </CoffeeSelectedDetails>
        </CoffeeSelectedInfo>

        <span>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(coffee.price)}
        </span>
      </CoffeeSelectedContainer>
      <Divider />
    </>
  )
}
