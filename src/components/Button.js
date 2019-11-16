import styled, { css } from 'styled-components'

const Button = styled.a`
  display: inline-block;
  text-align: center;
  border-radius: 3px;
  padding: 0rem 0.5rem;
  background-color: green;
  cursor: pointer;
  width: 15rem;
  ${props =>
    props.primary &&
    css`
      background: red;
    `}
`

export default Button
