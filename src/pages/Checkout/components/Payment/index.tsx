import { CurrencyDollarSimple, CreditCard, Bank, Money } from 'phosphor-react'
import { PaymentMethod } from '../..'
import {
  Head,
  PaymentContainer,
  Text,
  ButtonContainer,
  PaymentMethodButton,
} from './styles'

interface PaymentProps {
  paymentMethod: PaymentMethod | undefined
  setPaymentMethod: any
}

export function Payment({ paymentMethod, setPaymentMethod }: PaymentProps) {
  return (
    <PaymentContainer>
      <Head>
        <CurrencyDollarSimple size={22} color="#8047F8" />
        <Text>
          <span>Pagamento</span>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </Text>
      </Head>
      <ButtonContainer>
        <PaymentMethodButton
          type="button"
          icon={CreditCard}
          title="CARTÃO DE CRÉDITO"
          onClick={() => setPaymentMethod('credit')}
          selected={paymentMethod === 'credit'}
        />

        <PaymentMethodButton
          type="button"
          icon={Bank}
          title="CARTÃO DE DÉBITO"
          onClick={() => setPaymentMethod('debit')}
          selected={paymentMethod === 'debit'}
        />

        <PaymentMethodButton
          type="button"
          icon={Money}
          title="DINHEIRO"
          onClick={() => setPaymentMethod('cash')}
          selected={paymentMethod === 'cash'}
        />
      </ButtonContainer>
    </PaymentContainer>
  )
}
