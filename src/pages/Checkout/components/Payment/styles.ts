import styled, { css } from 'styled-components'
import { IconButton } from '../../../../components/IconButton'

export const PaymentContainer = styled.main`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  padding: 2.5rem;

  border-radius: 0.375rem;

  background: ${(props) => props.theme['brown-200']};
`

export const Head = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;
  flex: 1 0 0;

  span {
    font-size: 1rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  p {
    font-size: 0.875rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  color: ${(props) => props.theme['brown-700']};
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
`

export const ButtonPayment = styled.input`
  border: 0;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding: 1rem;

  border-radius: 0.375rem;
  background: ${(props) => props.theme['brown-400']};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['brown-500']};
  }

  span {
    color: ${(props) => props.theme['brown-700']};

    font-size: 0.75rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;
  }
`

interface PaymentMethodButtonProps {
  selected?: boolean
}

export const PaymentMethodButton = styled(IconButton)<PaymentMethodButtonProps>`
  ${({ selected }) => {
    if (selected) {
      return css`
      border: 0;
      background: ${(props) => props.theme['brown-500']}; !important;
      outline: 1px solid ${(props) => props.theme['purple-700']};
      `
    }

    return ''
  }}
`
