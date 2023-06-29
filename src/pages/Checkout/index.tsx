import { FormsDelivery } from './components/FormsDelivery'
import { Payment } from './components/Payment'
import { Order } from './components/Order'
import { CheckoutContainer, Information, SelectedCoffee } from './styles'

export function Checkout() {
  return (
    <>
      <CheckoutContainer>
        <Information>
          <h1>Complete seu pedido</h1>
          <FormsDelivery />
          <Payment />
        </Information>

        <SelectedCoffee>
          <h1>Cafés Selecionados</h1>
          <Order />
        </SelectedCoffee>
      </CheckoutContainer>
    </>
  )
}
