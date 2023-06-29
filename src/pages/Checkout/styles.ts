import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;

  padding: 2.5rem 10rem;
`

const frameBase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;

  h1 {
    font-size: 1.125rem;
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    line-height: 130%;

    color: ${(props) => props.theme['brown-800']};
  }
`

export const Information = styled(frameBase)`
  width: 40rem;
`

export const SelectedCoffee = styled(frameBase)``
