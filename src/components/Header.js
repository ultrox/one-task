import React from 'react'
import styled from 'styled-components'

export default Header

function Header() {
  return (
    <HeaderStyles>
      <PageName />
      <Search />
    </HeaderStyles>
  )
}

function PageName() {
  return <h2>Colors</h2>
}

function Search() {
  function requestItems(searchNode) {
    const [search] = searchNode
    console.log(search.value)
  }

  return (
    <form
      action="post"
      onSubmit={e => e.preventDefault() || requestItems(e.target.elements)}>
      <input type="search" />
      <button>Search</button>
    </form>
  )
}

const HeaderStyles = styled.header`
  height: 15rem;
  padding: 3rem 5rem;
  background-color: #f5f6f8;
  display: flex;
  justify-content: space-between;
`
