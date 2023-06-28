import {
  IntroContainer,
  Content,
  Title,
  Items,
  Item1,
  Item2,
  Item3,
  Item4,
  ContentFirst,
  ContentSecond,
} from './styles'
import CopoCafe from '../../../../assets/copo-cafe.png'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

export function Intro() {
  return (
    <IntroContainer>
      <Content>
        <Title>
          <h1>Encontre o Café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </Title>
        <Items>
          <ContentFirst>
            <Item1>
              <span>
                <ShoppingCart size={16} color="#FFF" weight="fill" />
              </span>
              <p>Compra simples e segura</p>
            </Item1>
            <Item2>
              <span>
                <Timer size={16} color="#FFF" weight="fill" />
              </span>
              <p>Entrega rápida e rastreada</p>
            </Item2>
          </ContentFirst>

          <ContentSecond>
            <Item3>
              <span>
                <Package size={16} color="#FFF" weight="fill" />
              </span>
              <p>Embalagem mantém o café intacto</p>
            </Item3>
            <Item4>
              <span>
                <Coffee size={16} color="#FFF" weight="fill" />
              </span>
              <p>O café chega fresquinho até você</p>
            </Item4>
          </ContentSecond>
        </Items>
      </Content>
      <img src={CopoCafe} alt="Copo de café" />
    </IntroContainer>
  )
}
