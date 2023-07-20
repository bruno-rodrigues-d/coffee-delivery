import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

import {
  FormsContainer,
  Head,
  Text,
  FormInfo,
  InputFull,
  InputHalf,
  InputMore,
} from './styles'
import { CheckoutFormValues } from '../..'

export function FormsDelivery() {
  const { register } = useFormContext<CheckoutFormValues>()

  return (
    <FormsContainer>
      <Head>
        <MapPinLine size={22} color="#C47F17" />
        <Text>
          <span>Endereço de Entrega</span>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </Text>
      </Head>
      <div>
        <FormInfo>
          <InputHalf type="text" placeholder="CEP" {...register('zipcode')} />
          <InputFull type="text" placeholder="Rua" {...register('street')} />
          <InputMore>
            <InputHalf
              type="text"
              placeholder="Número"
              {...register('number')}
            />
            <InputFull
              type="text"
              placeholder="Complemento"
              {...register('complement')}
            />
          </InputMore>
          <InputMore>
            <InputFull
              type="text"
              placeholder="Bairro"
              {...register('neighbourhood')}
            />
            <InputFull type="text" placeholder="Cidade" {...register('city')} />
            <InputHalf
              type="text"
              placeholder="UF"
              minLength={2}
              maxLength={2}
              {...register('state')}
            />
          </InputMore>
        </FormInfo>
      </div>
    </FormsContainer>
  )
}
