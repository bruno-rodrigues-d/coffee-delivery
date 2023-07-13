import styled from 'styled-components'

export const CoffeeQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  background: ${(props) => props.theme['brown-400']};
  border-radius: 6px;
`

export const QuantityButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;

  color: ${(props) => props.theme['purple-500']};
  background: ${(props) => props.theme['brown-400']};

  transition: color 0.2s linear;

  &:disabled {
    cursor: not-allowed;
  }

  &:enabled:hover {
    color: ${(props) => props.theme['purple-700']};
  }
`

export const QuantityInput = styled.input`
  width: 2ch;
  text-align: center;
  border: 0;
  color: ${(props) => props.theme['brown-700']};
  background: ${(props) => props.theme['brown-400']};
`
