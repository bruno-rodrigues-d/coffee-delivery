import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import { CheckoutFormValues, PaymentMethod } from '../Checkout'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  SuccessContainer,
  SuccessContent,
  SuccessBox,
  SuccessLocal,
  SuccessTime,
  SuccessPayment,
} from './styles'
import { useEffect } from 'react'

interface SuccessPageLocationState {
  address: CheckoutFormValues
  paymentMethod: PaymentMethod
}

export function Success() {
  const { state } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [navigate, state])

  if (!state) {
    return null
  }

  const { address, paymentMethod } = state as SuccessPageLocationState

  return (
    <>
      <SuccessContainer>
        <span>Uhu! Pedido confirmado</span>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <SuccessContent>
          <SuccessBox>
            <SuccessLocal>
              <MapPin size={32} color="#FFF" weight="fill" />
              <div>
                <span>
                  Entrega em{' '}
                  <strong>
                    {address.street}, {address.number}
                  </strong>
                </span>
                <p>
                  {address.neighbourhood} - {address.city}, {address.state}
                </p>
              </div>
            </SuccessLocal>
            <SuccessTime>
              <Timer size={32} color="#FFF" weight="fill" />
              <div>
                <span>Previsão de entrega</span>
                <p>
                  <strong>20min - 30min</strong>
                </p>
              </div>
            </SuccessTime>
            <SuccessPayment>
              <CurrencyDollar size={32} color="#FFF" />
              <div>
                <span>Pagamento na entrega</span>
                <p>
                  <strong>
                    {paymentMethod === 'credit' && 'Cartão de Crédito'}
                    {paymentMethod === 'debit' && 'Cartão de Débito'}
                    {paymentMethod === 'cash' && 'Dinheiro'}
                  </strong>
                </p>
              </div>
            </SuccessPayment>
          </SuccessBox>

          <img src="public/Illustration.png" alt="Ilustração" />
        </SuccessContent>
      </SuccessContainer>
    </>
  )
}
