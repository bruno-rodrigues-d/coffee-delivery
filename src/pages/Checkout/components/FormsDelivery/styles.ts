import styled from 'styled-components'

export const FormsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  padding: 2.5rem;

  border-radius: 0.375rem;

  background: ${(props) => props.theme['brown-200']};

  form {
    width: 100%;
  }
`

export const Head = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;
  flex: 1 0 0;

  span {
    font-size: 1rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  p {
    font-size: 0.875rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  color: ${(props) => props.theme['brown-700']};
`

export const FormInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  width: 100%;
`

const InputBase = styled.input`
  border: 0;

  padding: 0.75rem;

  border-radius: 0.25rem;
  border: 1px solid ${(props) => props.theme['brown-400']};
  background-color: ${(props) => props.theme['brown-300']};
`

export const InputFull = styled(InputBase)`
  width: 100%;
`

export const InputHalf = styled(InputBase)`
  width: 50%;
`

export const InputMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  width: 100%;

  input {
    border: 0;
    padding: 0.75rem;

    border-radius: 0.25rem;
    border: 1px solid ${(props) => props.theme['brown-400']};
    background-color: ${(props) => props.theme['brown-300']};
  }
`
