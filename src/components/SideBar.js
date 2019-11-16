import React from 'react'
import styled from 'styled-components'
import logoSrc from '../assets/logo.svg'
import bellSrc from '../assets/bell.svg'

export default SideBar

function SideBar() {
  return (
    <SidebarStyles>
      <SideHeader>
        <img src={logoSrc} alt="company logo" />
        <Notifications />
      </SideHeader>
      <SidebarElements>
        <SideTitle>Dictonaries</SideTitle>
        <SideElement>Home</SideElement>
      </SidebarElements>
      <ReportStyle>
        <PersonalNotification />
      </ReportStyle>
    </SidebarStyles>
  )
}

const DownloadButton = props => {
  return <button>{props.children}</button>
}

const PersonalNotification = () => {
  return (
    <div>
      <h3>Your Monthly Report</h3>
      <p>Get the info about all your data from previous month</p>
      <DownloadButton>Download PDF</DownloadButton>
    </div>
  )
}

const ReportStyle = styled.div``
const SideHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Notifications = () => {
  return <img src={bellSrc} alt="notification bell" />
}

const SideTitle = styled.h4`
  align-self: start;
`

const SidebarElements = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SideElement = styled.div``

const SidebarStyles = styled.aside`
  padding: 1.5rem;
  background-color: #131B24;
  color: #8E98A2;
  flex-shrink: 0;
  flex-basis: 12em;
}`
