import { CoffeeSelected } from '../CoffeeSelected'
import { OrderContainer, OrderButton, OrderInfo, OrderText } from './styles'

export function Order() {
  return (
    <OrderContainer>
      <CoffeeSelected />
      <CoffeeSelected />

      <OrderInfo>
        <OrderText>
          <span>Total de itens</span>
          <span>R$ 29,70</span>
        </OrderText>
        <OrderText>
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </OrderText>
        <OrderText>
          <p>Total</p>
          <p>R$ 33,20</p>
        </OrderText>
      </OrderInfo>

      <OrderButton>
        <span>Confirmar Pedido</span>
      </OrderButton>
    </OrderContainer>
  )
}
