import { Fragment, useContext, useMemo } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { priceFormatter } from '../../../../utils/Formatter'
import { CoffeeSelected } from '../CoffeeSelected'
import { OrderContainer, OrderButton, OrderInfo, OrderText } from './styles'

export function Order() {
  const deliveryFee = 3.5

  const { items } = useContext(CartContext)

  const itemsTotal = useMemo((): number => {
    return items.reduce(
      (total, item) => total + item.coffee.price * item.quantity,
      0,
    )
  }, [items])

  return (
    <OrderContainer>
      {items.map((item) => (
        <Fragment key={item.coffee.id}>
          <CoffeeSelected quantity={item.quantity} coffee={item.coffee} />
        </Fragment>
      ))}

      <Fragment>
        <OrderInfo>
          <OrderText>
            <span>Total de itens</span>
            <span>{priceFormatter.format(itemsTotal)}</span>
          </OrderText>
          <OrderText>
            <span>Entrega</span>
            <span>{priceFormatter.format(deliveryFee)}</span>
          </OrderText>
          <OrderText>
            <p>Total</p>
            <p>
              {items.length > 0
                ? priceFormatter.format(itemsTotal + deliveryFee)
                : `R$ 0,00`}
            </p>
          </OrderText>
        </OrderInfo>

        <OrderButton type="submit">
          <span>Confirmar Pedido</span>
        </OrderButton>
      </Fragment>
    </OrderContainer>
  )
}
