import React, { Component } from 'react'

class Table extends Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            employees: [{ employeeid: 1, firstname: "testtt", lastname: "blaa"}]
        }
    }

    renderTableData() {
        return this.props.employees.map((employee, id) => {
            const { employeeid, firstname, lastname } = employee //destructuring
            return (
                <tr key={employeeid}>
                    <td>{firstname}</td>
                    <td>{lastname}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = Object.keys(this.state.employees[0])
        return header.map((key, id) => {
            return <th key={id}>{key.toUpperCase()}</th>
        })
    }

    render() {
        return (
            <div>
                <h1 id='title'>React Dynamic Table</h1>
                <table id='employees'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export { Table };