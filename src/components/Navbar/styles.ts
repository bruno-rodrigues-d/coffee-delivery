import styled from 'styled-components'

export const NavbarContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding: 2rem 10rem;

  background: ${(props) => props.theme['brown-100']};

  nav {
    display: flex;
    gap: 0.75rem;

    text-decoration: none;
  }
`
export const LocationContainer = styled.div`
  border-radius: 6px;

  background: ${(props) => props.theme['purple-100']};

  padding: 0.7rem 1rem 0.5rem;

  a {
    font-size: 0.875rem;
    font-family: Roboto;
    line-height: 130%;

    text-decoration: none !important;

    color: ${(props) => props.theme['purple-700']};
  }
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`

export const Cart = styled.div`
  background: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-700']};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;

  border-radius: 6px;
  position: relative;

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: -0.5rem;
    right: -0.52156rem;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['yellow-500']};

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
  }
`
