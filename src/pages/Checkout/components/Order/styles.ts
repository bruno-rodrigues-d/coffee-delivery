import styled from 'styled-components'

export const OrderContainer = styled.main`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;
  width: 28rem;

  padding: 2.5rem;

  border-radius: 0.375rem;

  background: ${(props) => props.theme['brown-200']};
`
