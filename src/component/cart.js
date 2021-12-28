import React, { useState } from "react"
import { Table } from "react-bootstrap"
import { connect, useSelector, useDispatch } from "react-redux"
function Cart(props) {
  const state = useSelector((state) => state.reducer)
  console.log(state.reducer)
  const dispatch = useDispatch()
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
          {state.map((a, i) => {
            return (
              <tr>
                <td key={i}>{a.id}</td>
                <td key={i}>{a.name}</td>
                <td key={i}>{a.quan}</td>
                <button
                  onClick={() => {
                    dispatch({
                      type: "수량증가",
                      payload: a.id,
                    })
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    dispatch({ type: "수량감소", payload: a.id })
                  }}
                >
                  -
                </button>
              </tr>
            )
          })}
        </tbody>
      </Table>
      {props.alert상태 ? (
        <div className="red">
          <p>지금 구매하시면 신규할인 20%</p>
          <button
            onClick={() => {
              dispatch({ type: "상태변경" })
            }}
          >
            닫기
          </button>
        </div>
      ) : null}
    </>
  )
}

// function state를props화(state) {
//   return {
//     state: state.reducer,
//     alert상태: state.reducer2,
//   }
// }

// export default connect(state를props화)(Cart)

export default Cart
