import { MapPinLine } from 'phosphor-react'
import { FormProvider } from 'react-hook-form'
import {
  FormsContainer,
  Head,
  Text,
  FormInfo,
  InputFull,
  InputHalf,
  InputMore,
} from './styles'

export function FormsDelivery() {
  return (
    <FormsContainer>
      <Head>
        <MapPinLine size={22} color="#C47F17" />
        <Text>
          <span>Endereço de Entrega</span>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </Text>
      </Head>
      <form action="">
        <FormProvider>
          <FormInfo>
            <InputHalf type="text" placeholder="CEP" />
            <InputFull type="text" placeholder="Rua" />
            <InputMore>
              <InputHalf type="text" placeholder="Número" />
              <InputFull type="text" placeholder="Complemento" />
            </InputMore>
            <InputMore>
              <InputFull type="text" placeholder="Bairro" />
              <InputFull type="text" placeholder="Cidade" />
              <InputHalf type="text" placeholder="UF" />
            </InputMore>
          </FormInfo>
        </FormProvider>
      </form>
    </FormsContainer>
  )
}
