import React from 'react'
import styled from 'styled-components'
import logoSrc from '../assets/logo.svg'
import bellSrc from '../assets/bell.svg'

export default SideBar

function SideBar() {
  return (
    <SidebarStyles>
      <div>
        <SideHeader>
          <img src={logoSrc} alt="company logo" />
          <Notifications />
        </SideHeader>
        <SidebarElements>
          <SideTitle>Dictonaries</SideTitle>
          <SidebarElement>Overivew</SidebarElement>
          <SidebarElement active>Create New</SidebarElement>
          <SidebarElement href="/valid">Valid</SidebarElement>
          <SidebarElement>Invalid</SidebarElement>
        </SidebarElements>
      </div>
      <SystemNotification />
    </SidebarStyles>
  )
}

const DownloadButtonStyle = styled.a`
  font-size: 1.5rem;
  display: inline-block;
  cursor: pointer;
  margin-top: 3rem;

  user-select: none;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 0.75rem 2rem;
  &:hover {
    background-color: #2a2f35;
  }
`
const DownloadButton = props => {
  return <DownloadButtonStyle>{props.children}</DownloadButtonStyle>
}

const SidebarElement = props => {
  const StyledSidebarElement = styled.a`
    padding: 0.7rem 2rem;
    font-size: 1.5rem;
    display: block;
    color: gray
    text-decoration: none;
  ${props =>
    props.active
      ? 'box-shadow: inset 1px 0 0px 0px #00B6EA; background-color: #19232f'
      : ''}
    &:hover {
      background-color: #19232f;
  }`

  return (
    <StyledSidebarElement href="#" {...props}>
      {props.children}
    </StyledSidebarElement>
  )
}

const SystemNotification = () => {
  return (
    <ReportStyle>
      <ReportTitle>Your Monthly Report</ReportTitle>
      <ReportStyleMsg>
        Get the info about all your data from previous month
      </ReportStyleMsg>
      <DownloadButton>Download PDF</DownloadButton>
    </ReportStyle>
  )
}

const ReportStyle = styled.div`
  border-radius: 5px;
  padding: 1.3rem;
  background-color: #1e232d;
`
const ReportTitle = styled.h5`
  font-size: 1.5rem;
  color: #edf2f7;
`
const ReportStyleMsg = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
`
const SideHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Notifications = () => {
  return <BellIcon src={bellSrc} alt="notification bell" />
}

const BellIcon = styled.img`
  &:hover {
    cursor: pointer;
  }
`
const SideTitle = styled.h4`
  align-self: start;
`

const SidebarElements = styled.div`
  margin-top: 10rem;
`

const SidebarStyles = styled.aside`
  display: flex;
flex-direction: column;
justify-content: space-between;
  padding: 1.5rem;
  height: 100vh;
  background-color: #131B24;
  color: #8E98A2;
  flex-shrink: 0;
  flex-basis: 12em;
}`
