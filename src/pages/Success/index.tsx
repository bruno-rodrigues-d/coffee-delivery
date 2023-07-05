import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import {
  SuccessContainer,
  SuccessContent,
  SuccessBox,
  SuccessLocal,
  SuccessTime,
  SuccessPayment,
} from './styles'

export function Success() {
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
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </span>
                <p>Farrapos - Porto Alegre, RS</p>
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
                  <strong>Cartão de Crédito</strong>
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
