import React, { useState } from "react"
import data from "./component/data.js"
import "./App.css"
import Detail from "./component/detail.js"
import { Link, Route, Switch, useHistory } from "react-router-dom"
import axios from "axios"
import Cart from "./component/cart"
import "bootstrap/dist/css/bootstrap.min.css"

import {
  Nav,
  Form,
  FormControl,
  Button,
  Navbar,
  Container,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap"

function App() {
  let [keys, key변경] = useState(data)
  let [재고, 재고변경] = useState([10, 11, 12])
  return (
    <div className="App">
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/detail/0">Detail</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/cart">Cart</Link>
                </Nav.Link>
                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <div className="Jumbotron">
            <h1>20% Season Off</h1>
            <h5>Keychron is yours</h5>
            <Button className="Button">Primary</Button>
          </div>
          <div className="container">
            <div className="row">
              {keys.map((a, i) => {
                return <Card keychron={a} i={i} key={i}></Card>
              })}
            </div>
            <Button
              className="Button"
              onClick={() => {
                axios
                  .get("https://codingapple1.github.io/shop/data2.json")
                  .then((d) => {
                    key변경([...keys, ...d.data])
                  })
                  .catch((err) => console.log(err))
              }}
            >
              더보기
            </Button>
          </div>
        </Route>

        <Route path="/detail/:id">
          <Detail keychron={keys} 재고={재고} 재고변경={재고변경}></Detail>
        </Route>

        <Route path="/cart">
          <Cart></Cart>
        </Route>

        <Route path="/:id">
          <div>아무거나 적었을 때</div>
        </Route>
      </Switch>
    </div>
  )
}

function Card(props) {
  let history = useHistory()
  return (
    <>
      <div
        className="col-md-4"
        onClick={() => {
          history.push("/detail/" + props.keychron.id)
        }}
      >
        <img src={props.keychron.img} width="100%" alt="" />
        <h4>{props.keychron.title}</h4>
        <p>{props.keychron.content}</p>
      </div>
    </>
  )
}

export default App
