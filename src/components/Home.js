import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

class Home extends Component {
    render() {
        return (
            <div className="mt-3 justify-content-left">
                <h2>Home Componets</h2>
                <br />
                <Button variant="danger" size="sm">Click</Button>

            </div>
        )
    }
}

export default Home
