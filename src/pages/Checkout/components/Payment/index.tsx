import { CurrencyDollarSimple, CreditCard, Bank, Money } from 'phosphor-react'
import {
  Head,
  PaymentContainer,
  Text,
  ButtonContainer,
  ButtonPayment,
} from './styles'

export function Payment() {
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
        <ButtonPayment>
          <CreditCard size={16} color="#8047F8" />
          <span>cartão de crédito</span>
        </ButtonPayment>
        <ButtonPayment>
          <Bank size={16} color="#8047F8" />
          <span>cartão de débito</span>
        </ButtonPayment>
        <ButtonPayment>
          <Money size={16} color="#8047F8" />
          <span>dinheiro</span>
        </ButtonPayment>
      </ButtonContainer>
    </PaymentContainer>
  )
}
