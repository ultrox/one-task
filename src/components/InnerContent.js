import React from 'react'
import styled from 'styled-components'

export default InnerContent

function InnerContent(props) {
  return (
    <InnerContentStyles>
      {props.children}
    </InnerContentStyles>
  )
}

const InnerContentStyles = styled.div`
  padding: 0.4em;
  width: 80%;
  background-color: #f5f6f8;
  margin-top: 3rem;
  margin-left: 3rem;
`
