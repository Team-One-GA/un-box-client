import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import './Landing.scss'
import Button from 'react-bootstrap/Button'
import Imageback from '../Imageback/Imageback'
const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#items">Check Inventory</Nav.Link>
    <Nav.Link href="#create-item">Update Inventory</Nav.Link>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>

)

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#/">Home</Nav.Link>
  </Fragment>
)

const Landing = ({ user }) => (
  <main>
    <div id='tetsing1'>
  testing
      <Imageback />
      <alwaysOptions/>
      <authenticatedOptions/>
      <unauthenticatedOptions/>
      <Button
        variant="primary"
        type="submit"
      >
      Get Started
      </Button>
    </div>
  </main>
)
export default Landing
// const Header = ({ user }) => (
//   <Navbar bg="primary" variant="dark" expand="md">
//     <Navbar.Brand href="#">
//       <img src="https://i.imgur.com/ccQ0FEx.png" width="40"/>
//     </Navbar.Brand>
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     <Navbar.Collapse id="basic-navbar-nav">
//       <Nav className="ml-auto">
//         { user && <span className="navbar-text mr-2">Welcome, {user.username}</span>}
//         { alwaysOptions }
//         { user ? authenticatedOptions : unauthenticatedOptions }
//       </Nav>
//     </Navbar.Collapse>
//   </Navbar>
// )
