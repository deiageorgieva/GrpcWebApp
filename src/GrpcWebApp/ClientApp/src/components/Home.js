import React, { Component } from 'react';
import * as grpcClient from '../proto/client.js';
import { Table } from './Table.js';
import { CreateEmployeeForm } from './CreateEmployeeForm.js';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            employees: [],
            showEmployeeTable: false,
            showCreateEmployeeForm: false,
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
            <h1 id="pageLabel" >Employees</h1>
                <button onClick={() => this.handleCreateEmployee()}>Create new employee</button>

                <div>
                    {this.state.showCreateEmployeeForm && <CreateEmployeeForm />}
                </div>

                <button onClick={() => this.handleListEmployees()}>List employees</button>

                <div>
                    {this.state.showEmployeeTable && <Table employees={this.state.employees} />}
                </div>
            </div>
        );
    }

     handleListEmployees = () => {
         grpcClient.getEmployees()
             .then(employeesList => {
                 console.log(employeesList);
                 this.setState({ employees: employeesList }, () => { this.setState({ showEmployeeTable: true }) });
             });
    }

    handleCreateEmployee = () => {
        this.setState({ showCreateEmployeeForm: !this.state.showCreateEmployeeForm })
    }
}
