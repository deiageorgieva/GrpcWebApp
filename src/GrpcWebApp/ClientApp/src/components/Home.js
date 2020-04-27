import React, { Component } from 'react';
import { insertEmployeeAsync, selectAllEmployees } from '../proto/client.js'
import { Employee, EmployeeFilter, Empty, Employees, Result } from '../proto/employee_pb';
import { EmployeeServiceClient } from '../proto/employee_grpc_web_pb';
import { Table } from './Table.js';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            employees: [],
            showComponent: false
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
            <h1 id="tabelLabel" >Employees</h1>
            <p>This component demonstrates fetching data from the server.</p>
                <button onClick={() => this.handleClick()}>Click Me</button>
                {this.state.showComponent && <Table employees={this.state.employees} />}
            </div>
        );
    }


    getEmployees = ()=> {
        console.log('Start getEmployees');

        var employeeService = new EmployeeServiceClient(window.location.origin);
        var request = new Empty();

        return new Promise(async (fulfill, reject) => {
            await employeeService.selectAll(request, {}, (err, response) => {
                if (err !== null) {
                    console.log('Error code: ' + err);
                    reject(err);
                }
                else {
                    console.log('Getting employees: ' + response.toObject().employeeslistList);
                    fulfill(response.toObject().employeeslistList);
                }
            })
        });
    }

     handleClick() {
        console.log('Start handle click');

         this.getEmployees()
             .then(employeesList => {
                 console.log(employeesList);
                 this.setState({ employees: employeesList }, () => { this.setState({ showComponent: true}) });
            });

         console.log(this.state.employees[0]);
         console.log('End handle click');
    }
}
