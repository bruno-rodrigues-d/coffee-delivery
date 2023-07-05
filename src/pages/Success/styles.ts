import styled from 'styled-components'

export const SuccessContainer = styled.main`
  width: 100%;

  display: flex;
  align-items: flex-start;
  flex-direction: column;

  width: 90rem;
  height: 63.3125rem;

  > span {
    padding-left: 10rem;
    padding-top: 6rem;

    color: ${(props) => props.theme['yellow-700']};

    font-size: 2rem;
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }

  > p {
    padding: 0.25rem 10rem;
    color: ${(props) => props.theme['brown-800']};

    font-size: 1.25rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`

export const SuccessContent = styled.div`
  display: flex;
  align-items: space-between;
  justify-content: flex-start;
  gap: 6.38rem;
  margin-top: 3rem;
  margin-left: 10rem;

  img {
    width: 30.75rem;
    height: 18.3125rem;
  }
`

export const SuccessBox = styled.div`
  display: flex;
  width: 32.875rem;
  padding: 3rem;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  border-radius: 0.375rem 2.25rem;
  border: 1px solid transparent;

  background: ${(props) => props.theme['brown-100']};

  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`

export const SuccessCardBase = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    border-radius: 62.5rem;
  }
`

export const SuccessLocal = styled(SuccessCardBase)`
  svg {
    background: ${(props) => props.theme['purple-500']};
  }
`

export const SuccessTime = styled(SuccessCardBase)`
  svg {
    background: ${(props) => props.theme['yellow-500']};
  }
`

export const SuccessPayment = styled(SuccessCardBase)`
  svg {
    background: ${(props) => props.theme['yellow-700']};
  }
`
