import styled from 'styled-components'

const BaseButton = styled.button`
  border: none;
  padding: 16px 26px;
  background-color: ${({ type }) => (type === 'orange' ? 'var(--color-orange)' : 'var(--color-white)')};
  border-radius: 35px;
  color: ${({ type }) => (type === 'orange' ? 'var(--color-white)' : 'var(--color-purple-dark)')};
  text-transform: uppercase;
  margin-right: ${({ right }) => right || 'var(--size-s1)'};
  font-family: 'AkzidenzGroteskBE';
  font-weight: bold;
  font-size: 1rem;
  height: 50px;
  cursor: pointer;
  margin-bottom: ${({ bottom }) => bottom || 'var(--size-s1)'};
  min-width: 180px;
`

const StyledButton = styled(BaseButton)`
  margin-top: 40px;
`

const StyledButtonList = styled(BaseButton)``

export { StyledButton, StyledButtonList }
