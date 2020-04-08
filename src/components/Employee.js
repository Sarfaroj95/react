import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap'

class Employee extends Component {

    constructor(props) {
        super(props)

        this.state = {
            deps: []
        }
    }
    componentDidMount() {
        this.eployeeList()
    }

    eployeeList() {
        this.setState({
            deps: [
                { "id": 1, "name": "Sarfaroj", "deg": "web developer", "from": "west bengal" },
                { "id": 2, "name": "sushanta", "deg": "web developer", "from": "west bengal" }
            ]
        })
    }

    render() {
        const { deps } = this.state
        return (
            <div className="mt-3 justify-content-center">
                <h4 className="text-center mb-1">Department</h4>
                <Link to='/department'>
                    <Button varient="primary" size="sm" className="float-right mb-2">Register New Emp</Button>
                </Link>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Emp Name</th>
                            <th>Emp Degisnation</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            deps.map(dep =>
                                <tr key={dep.id}>
                                    <td>{dep.id}</td>
                                    <td>{dep.name}</td>
                                    <td>{dep.deg}</td>
                                    <td>{dep.from}</td>
                                </tr>
                            )
                        }


                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Employee
