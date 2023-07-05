import styled from 'styled-components'

export const OrderContainer = styled.main`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;
  width: 28rem;

  padding: 2.5rem;

  border-radius: 0.375rem 2.75rem;

  background: ${(props) => props.theme['brown-200']};
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;
  width: 100%;
`

export const OrderText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  span {
    color: ${(props) => props.theme['brown-700']};

    font-size: 0.875rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  p {
    color: ${(props) => props.theme['brown-800']};

    font-size: 1.25rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
`

export const OrderButton = styled.button`
  display: flex;
  padding: 0.75rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border: 0;
  width: 100%;

  border-radius: 0.375rem;
  background: ${(props) => props.theme['yellow-500']};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['yellow-700']};
  }

  span {
    color: ${(props) => props.theme.white};
    font-size: 0.875rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
    text-transform: uppercase;
  }
`
