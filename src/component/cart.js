import React, { useState } from "react"
import { Table } from "react-bootstrap"
import { connect } from "react-redux"
function Cart(props) {
  return (
    <>
      <Table responsive>
        <thead>
          <tr>
            <td>#</td>
            <td>상품명</td>
            <td>수량</td>
            <td>변경</td>
            <td>추가</td>
          </tr>
        </thead>
        <tbody>
          {props.state.map((a, i) => {
            return (
              <tr>
                <td key={i}>{a.id}</td>
                <td key={i}>{a.name}</td>
                <td key={i}>{a.quan}</td>
                <button
                  onClick={() => {
                    props.dispatch({ type: "수량증가" })
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    props.dispatch({ type: "수량감소" })
                  }}
                >
                  -
                </button>
              </tr>
            )
          })}
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
