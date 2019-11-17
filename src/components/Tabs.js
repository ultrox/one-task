import React from 'react'
import styled from 'styled-components'

export default Tabs

function Tabs() {
  return (
    <Section>
      <TabContainer>
        <TabStyles href="#">All Rows</TabStyles>
        <TabStyles href="#">Invalid Rows</TabStyles>
      </TabContainer>
    </Section>
  )
}

const Section = styled.div`
  padding: 0.4em;
`
const TabContainer = styled.div`
  display: flex;
  align-items: center: 
`
const TabStyles = styled.a`
  margin-left: 10rem;
  color: #1a202c;
  text-decoration: none;
  &:hover {
    box-shadow: inset 0 -3px 0 0 #00B6EA;
  }
`
