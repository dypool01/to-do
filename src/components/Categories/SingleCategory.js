import React from 'react'

export default function SingleCategory(props) {
  return (
    <tr>
        <td>{props.category.catName}</td>
        <td>{props.category.catDescription}</td>
    </tr>
  )
}
