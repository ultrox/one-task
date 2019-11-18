import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'

export default Table

function Pagination() {
  return (
    <PaginationStyle>
      Rows per page: 20
      <span>1</span>
      <span>1</span>
      <span>1</span>
      <span>1</span>
    </PaginationStyle>
  )
}

function Table(data) {
  return (
    <TableStyles>
      <table>
        <th />
        <th />
        <th>Domain</th>
        <th>Range</th>
        <th>Status</th>
        <tr>
          <td>
            <TrashIcon />
          </td>
          <td>
            {' '}
            <EditIcon />{' '}
          </td>
          <td>Stonegrey</td>
          <td>Dark Grey</td>
          <td>1</td>
        </tr>
        <tr>
          <td>
            <TrashIcon />
          </td>
          <td>
            {' '}
            <EditIcon />
          </td>{' '}
          <td>Stonegrey</td>
          <td>Dark Grey</td>
          <td>1</td>
        </tr>
        <tr>
          <td>
            <TrashIcon />
          </td>
          <td>
            {' '}
            <EditIcon />
          </td>
          <td>Stonegrey</td>
          <td>Dark Grey</td>
          <td>1</td>
        </tr>
      </table>
      <Pagination />
    </TableStyles>
  )
}

const TableStyles = styled.div`
  table {
    border-collapse: collapse;
    width: 100%;
  }

  td {
    border: 1px solid gray;
  }
`
const PaginationStyle = styled.div``

const EditIcon = ({ size = 2 }) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#">
      <Icon name="edit" size={size} />
    </a>
  )
}

const TrashIcon = ({ size = 2 }) => {
  return <Icon name="trash" size={size} />
}
