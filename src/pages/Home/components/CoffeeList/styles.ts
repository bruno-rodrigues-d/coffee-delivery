import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.375rem;

  padding: 1rem 10rem 10rem;

  h2 {
    font-size: 2rem;
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 130%;
  }
`

export const List = styled.div`
  margin-top: 1rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2.5rem;
`
