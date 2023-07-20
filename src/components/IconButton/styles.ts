import styled, { css } from 'styled-components'

interface IconButtonContainerProps {
  size: 'small' | 'big'
}

export const IconButtonContainer = styled.button<IconButtonContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${(props) => props.theme['brown-700']};
  font-size: 0.75rem;
  background: ${(props) => props.theme['brown-400']};
  border-radius: 6px;
  border: 0;

  ${({ size }) => {
    if (size === 'small') {
      return css`
        padding: 0.5rem;
        gap: 0.25rem;
      `
    }

    return css`
      padding: 1rem;
      gap: 0.75rem;
    `
  }}

  transition: 0.2s linear;
  transition-property: color, background-color;

  &:hover {
    color: ${(props) => props.theme['brown-700']};
    background: ${(props) => props.theme['brown-500']};
  }
`
