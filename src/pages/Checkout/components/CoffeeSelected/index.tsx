import { Minus, Plus, Trash } from 'phosphor-react'
import { CartContext } from '../../../../contexts/CartContext'
import { useContext } from 'react'

import {
  CoffeeSelectedContainer,
  CoffeeSelectedInfo,
  CoffeeSelectedDetails,
  CoffeeSelectedActions,
  CoffeeSelectedCount,
  CoffeeSelectedRemove,
  Divider,
} from './styles'
export function CoffeeSelected() {
  const { addCartItem, removeCartItem, coffeeSelected } =
    useContext(CartContext)

  console.log(coffeeSelected)
  return (
    <>
      {coffeeSelected.map((item) => {
        return (
          <CoffeeSelectedContainer key={item.id}>
            <CoffeeSelectedInfo>
              <img src={item.image} alt="" />
              <CoffeeSelectedDetails>
                <span>{item.name}</span>
                <CoffeeSelectedActions>
                  <CoffeeSelectedCount>
                    <button>
                      <Minus size={16} color="#8047F8" />
                    </button>
                    <span>1</span>
                    <button>
                      <Plus size={16} color="#8047F8" />
                    </button>
                  </CoffeeSelectedCount>
                  <CoffeeSelectedRemove>
                    <Trash size={16} color="#8047F8" />
                    <span>remover</span>
                  </CoffeeSelectedRemove>
                </CoffeeSelectedActions>
              </CoffeeSelectedDetails>
            </CoffeeSelectedInfo>

            <span>{item.price}</span>
          </CoffeeSelectedContainer>
        )
      })}

      <Divider />
    </>
  )
}
