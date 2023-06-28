import styled from 'styled-components'

export const IntroContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 6rem 10rem;

  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`
export const Content = styled.div`
  width: 36.75rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-shrink: 0;
  gap: 4.125rem;
`

export const Title = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;

  h1 {
    font-size: 3rem;
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 130%;

    color: ${(props) => props.theme['brown-900']};
  }

  p {
    font-size: 1.25rem;
    font-family: Roboto;
    line-height: 130%;

    color: ${(props) => props.theme['brown-800']};
  }
`

export const Items = styled.div`
  width: 35.4375rem;
  height: 5.25rem;
  flex-shrink: 0;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
export const ContentSecond = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
`

export const ContentFirst = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
`

const BaseItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  span {
    width: 2rem;
    height: 2rem;

    border-radius: 1000px;

    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`

export const Item1 = styled(BaseItem)`
  span {
    background: ${(props) => props.theme['yellow-700']};
  }
`

export const Item2 = styled(BaseItem)`
  span {
    background: ${(props) => props.theme['yellow-500']};
  }
`

export const Item3 = styled(BaseItem)`
  span {
    background: ${(props) => props.theme['brown-700']};
  }
`

export const Item4 = styled(BaseItem)`
  span {
    background: ${(props) => props.theme['purple-700']};
  }
`
