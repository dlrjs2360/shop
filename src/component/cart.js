import React, { useState } from "react"
import { Table } from "react-bootstrap"
import { connect } from "react-redux"
function Cart(props) {
  return (
    <>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {Array.from({ length: 6 }).map((_, index) => (
              <th key={index}>Table heading</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            {Array.from({ length: 6 }).map((_, index) => (
              <td key={index}>
                {props.state[0].name} {index}
              </td>
            ))}
          </tr>
        </tbody>
      </Table>
    </>
  )
}

function state를props화(state) {
  return {
    state: state,
  }
}

export default connect(state를props화)(Cart)

// export default Cart
