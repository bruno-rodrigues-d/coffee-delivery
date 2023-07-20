import { FormsDelivery } from './components/FormsDelivery'
import { Payment } from './components/Payment'
import { Order } from './components/Order'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

import { CheckoutContainer, Information, SelectedCoffee } from './styles'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'

const checkoutFormValidationSchema = zod.object({
  zipcode: zod.string(),
  street: zod.string(),
  number: zod.string(),
  complement: zod.string().optional(),
  neighbourhood: zod.string(),
  city: zod.string(),
  state: zod.string().min(2).max(2),
})

export type CheckoutFormValues = zod.infer<typeof checkoutFormValidationSchema>
export type PaymentMethod = 'credit' | 'debit' | 'cash'

export function Checkout() {
  const navigate = useNavigate()
  const { items, clearCart } = useContext(CartContext)
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>()
  const checkoutForm = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormValidationSchema),
  })

  function handleCheckout(values: CheckoutFormValues) {
    if (!items.length) {
      return alert('É necessário selecionar itens para finalizar pedido')
    }

    if (!paymentMethod) {
      return alert('É necessário selecionar um método de pagamento')
    }

    clearCart()
    navigate('/success', {
      state: {
        address: values,
        paymentMethod,
      },
    })
  }

  return (
    <>
      <form onSubmit={checkoutForm.handleSubmit(handleCheckout)}>
        <CheckoutContainer>
          <Information>
            <h1>Complete seu pedido</h1>
            <FormProvider {...checkoutForm}>
              <FormsDelivery />
              <Payment
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
              />
            </FormProvider>
          </Information>

          <SelectedCoffee>
            <h1>Cafés Selecionados</h1>
            <Order />
          </SelectedCoffee>
        </CheckoutContainer>
      </form>
    </>
  )
}
