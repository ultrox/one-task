import React from 'react'
import styled from 'styled-components'
import edit from '../assets/edit.svg'
import trash from '../assets/trash.svg'

const iconList = {edit, trash}

export default function Icon({ size = 2, name }) {
  const IconStyle = styled.img`
    width: ${size}rem;
  `
  return <IconStyle src={iconList[name] || edit} />
}
