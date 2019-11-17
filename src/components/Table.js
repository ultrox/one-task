import React from 'react'
import styled from 'styled-components'

export default Table

function Table() {
  return (
    <div>
      <Section>Hello From Table</Section>
    </div>
  )
}

const Section = styled.div`
  padding: 0.4em;
  border: 1px solid darkgrey;
`
