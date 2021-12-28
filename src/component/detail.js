import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { Nav } from "react-bootstrap"
import "./detail.scss"
import { CSSTransition } from "react-transition-group"
import { connect } from "react-redux"

// import styled from "styled-components"
// let Box = styled.div`
//   padding: 20px;
//   font-size: 30px;
//   color: ${(props) => props.색상};
// `

function Detail(props) {
  let [상태, 상태변경] = useState(true)

  useEffect(() => {
    let 타이머 = setTimeout(() => {
      상태변경(false)
    }, 2000)

    return () => {
      clearTimeout(타이머)
    }
  })

  let history = useHistory()
  let { id } = useParams()
  let mer = props.keychron.find((a) => {
    // eslint-disable-next-line eqeqeq
    return a.id == id
  })

  let [누른탭, 누른탭변경] = useState(0)
  let [스위치, 스위치변경] = useState(false)
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={mer.img} width="100%" alt="" />
          </div>{" "}
          <div className="col-md-6 mt-4">
            {상태 ? <알림창></알림창> : null}
            <h4 className="pt-5">{mer.title}</h4>
            <p>{mer.content}</p>
            <p>{mer.price}원</p>
            <재고 재고={props.재고[mer.id]}></재고>
            <button
              className="btn btn-danger"
              onClick={() => {
                props.재고변경([...props.재고])
                props.dispatch({
                  type: "항목추가",
                  payload: { id: mer.id, name: mer.title, quan: mer.quan },
                })
                history.push("/cart")
              }}
            >
              주문하기
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                history.goBack()
              }}
            >
              뒤로가기
            </button>
          </div>
        </div>

        <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link
              eventKey="link-0"
              onClick={() => {
                누른탭변경(1)
                스위치변경(false)
              }}
            >
              1번째
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-1"
              onClick={() => {
                누른탭변경(2)
                스위치변경(false)
              }}
            >
              2번째
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <CSSTransition in={스위치} classNames="wow" timeout={500}>
          <TabComponent 상태={누른탭} 스위치변경={스위치변경}></TabComponent>
        </CSSTransition>
      </div>
    </>
  )
}

function TabComponent(props) {
  useEffect(() => {
    props.스위치변경(true)
  })
  if (props.상태 === 0) {
    return <div>0번째 내용입니다.</div>
  } else if (props.상태 == 1) {
    return <div>1번째 내용입니다.</div>
  } else if (props.상태 == 2) {
    return <div>2번째 내용입니다.</div>
  }
}

function 재고(props) {
  return (
    <>
      <div>재고 : {props.재고}</div>
    </>
  )
}

function 알림창() {
  return <div className="red">스타일컴포넌트</div>
}

function state를props화(state) {
  return {
    state: state.reducer,
    alert상태: state.reducer2,
  }
}

export default connect(state를props화)(Detail)
