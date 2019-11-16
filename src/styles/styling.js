import styled from 'styled-components'
import { device } from './devices'

export const AppStyle = styled.div`
  display: flex;
`

export const Content = styled.section`
  @media ${device.tablet} {
    color: gray;
  }
  flex: 0 1 auto;
`


export const Section = styled.div`
  padding: 0.4em;
  border: 1px solid darkgrey;
`
