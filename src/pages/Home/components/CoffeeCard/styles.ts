import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  background: ${(props) => props.theme['brown-200']};
  width: 16rem;
  height: 19.375rem;

  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  > img {
    width: 7.5rem;
    height: 7.5rem;

    margin-top: -3.25rem;
  }

  > h3 {
    color: ${(props) => props.theme['brown-700']};

    text-align: center;
    font-size: 1.25rem;
    font-family: 'Baloo 2';
    font-weight: 700;
    line-height: 130%;
  }

  > p {
    color: ${(props) => props.theme['brown-600']};

    text-align: center;
    font-size: 0.875rem;
    font-family: Roboto;
    line-height: 130%;

    padding: 0 1.25rem;
  }
`

export const Type = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  > span {
    padding: 0.25rem 0.5rem;
    border-radius: 100px;

    font-size: 0.625rem;
    font-family: Roboto;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;

    background: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-700']};
  }
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`

export const Price = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 0.25rem;

  color: ${(props) => props.theme['brown-700']};

  line-height: 130%;

  > p {
    font-family: Roboto;
    font-size: 0.875rem;
  }

  > span {
    font-family: 'Baloo 2';
    font-size: 2rem;
  }
`

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const Count = styled.div`
  background: ${(props) => props.theme['brown-400']};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;

  height: 2.5rem;

  padding: 0.5rem;
  border-radius: 6px;

  button {
    cursor: pointer;
    color: ${(props) => props.theme['purple-500']};
    background: ${(props) => props.theme['brown-400']};

    border: 0;

    &:hover {
      color: ${(props) => props.theme['purple-700']};
    }
  }

  span {
    color: ${(props) => props.theme['brown-800']};

    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
  }
`

export const AddToCartButton = styled.button`
  aspect-ratio: 1 / 1;
  width: 2.375rem;
  border-radius: 6px;
  padding: 0.5rem;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme['purple-700']};

  transition: background-color 0.2s linear;

  &:hover {
    background: ${(props) => props.theme['purple-500']};
  }
`
