import styled from 'styled-components'

export const CoffeeSelectedContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 0.5rem 0.25rem;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.25rem;

  background: ${(props) => props.theme['brown-200']};

  span {
    color: ${(props) => props.theme['brown-700']};

    font-size: 1rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
`

export const CoffeeSelectedInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const CoffeeSelectedDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  span {
    color: ${(props) => props.theme['brown-800']};

    font-size: 1rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`

export const CoffeeSelectedActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const CoffeeSelectedCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border-radius: 0.375rem;
  height: 2rem;
  padding: 0.5rem;

  background: ${(props) => props.theme['brown-400']};

  button {
    border: 0;
    background: ${(props) => props.theme['brown-400']};
  }
`

export const CoffeeSelectedRemove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border-radius: 0.375rem;
  height: 2rem;
  padding: 0.5rem;

  background: ${(props) => props.theme['brown-400']};

  button {
    border: 0;
    background: ${(props) => props.theme['brown-400']};
  }

  span {
    text-transform: uppercase;
    font-size: 0.75rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
  }
`

export const Divider = styled.div`
  height: 0rem;
  width: 100%;
  border: 1px solid ${(props) => props.theme['brown-400']};
`
