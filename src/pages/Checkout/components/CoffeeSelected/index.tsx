import { Minus, Plus, Trash } from 'phosphor-react'
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
  return (
    <>
      <CoffeeSelectedContainer>
        <CoffeeSelectedInfo>
          <img src="/public/Expresso.png" alt="" />
          <CoffeeSelectedDetails>
            <span>Expresso Tradicional</span>
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

        <span>R$ 9,90</span>
      </CoffeeSelectedContainer>

      <Divider />
    </>
  )
}
