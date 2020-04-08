import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Navbar, Nav } from 'react-bootstrap/'

class Navigation extends Component {

    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                    <NavLink className="d-inline p-2 bg-dark text-white" to="/">Home</NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className='d-inline p-2 bg-dark text-white' to='/department'>Department</NavLink>
                            <NavLink className='d-inline p-2 bg-dark text-white' to='employee'>Employee</NavLink>

                        </Nav>
                        <Nav>
                            {/* <Button variant="danger" size="sm">Click</Button> */}

                            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
                            {/* <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation
