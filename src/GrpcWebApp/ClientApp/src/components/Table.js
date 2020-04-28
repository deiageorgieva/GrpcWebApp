import React, { Component } from 'react'

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            employees: this.props.employees,
            selected: {},
            selectAll: 0,
        }

        this.toggleRow = this.toggleRow.bind(this);
    }

    toggleRow = () => {

    }

    renderTableData() {
        return this.props.employees.map((employee, id) => {
            const { employeeid, firstname, lastname } = employee //destructuring
            return (
                <tr key={employeeid}>
                    <td>{employeeid}</td>
                    <td>{firstname}</td>
                    <td>{lastname}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = Object.keys(this.state.employees[0])
        return header.map((key, id) => {
            return <th key={id}>{key.toLowerCase()}</th>
        })
    }

    render() {
        return (
            <div>
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