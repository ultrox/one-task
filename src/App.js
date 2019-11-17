import React from 'react'
import SideBar from './components/SideBar'
import { GlobalStyle, RightSide, AppStyle } from './styles'
import Header from './components/Header'
import InnerContent from './components/InnerContent'
import Table from './components/Table'
import Tabs from './components/Tabs'

function App() {
  return (
    <AppStyle>
      <GlobalStyle />
      <SideBar />
      <RightSide>
        <Header />
        <InnerContent>
          <Tabs />
          <Table />
        </InnerContent>
      </RightSide>
    </AppStyle>
  )
}

export default App
