import { ShoppingCart } from 'phosphor-react'
import { useContext, useRef } from 'react'
import { CoffeeQuantity } from '../../../../components/CoffeeQuantity'
import { CartContext } from '../../../../contexts/CartContext'
import {
  CoffeeCardContainer,
  PriceContainer,
  Price,
  Quantity,
  Type,
  AddToCartButton,
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

interface CoffeeQuantityRef {
  quantity: number
}

export function CoffeeCard({ item }: CoffeeListArrayProps) {
  const { addItemToCart } = useContext(CartContext)
  const coffeeQuantityRef = useRef<CoffeeQuantityRef>(null)

  function handleAddToCart() {
    addItemToCart(coffeeQuantityRef.current?.quantity ?? 1, item.id)
  }

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
          <span>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(item.price)}
          </span>
        </Price>

        <Quantity>
          <CoffeeQuantity ref={coffeeQuantityRef} />
          <AddToCartButton type="button" onClick={handleAddToCart}>
            <ShoppingCart size={24} color="#FFF" weight="fill" />
          </AddToCartButton>
        </Quantity>
      </PriceContainer>
    </CoffeeCardContainer>
  )
}
