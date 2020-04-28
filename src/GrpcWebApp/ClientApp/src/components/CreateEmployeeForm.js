import React, { Component } from 'react'
import * as grpcClient from '../proto/client.js';

class CreateEmployeeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
        };

        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.firstName + ' ' + this.state.lastName);

        grpcClient.insertEmployee({firstName: this.state.firstName, lastName: this.state.lastName})
        .then(message => {
            console.log(message);
        });

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label> 
                    First name:
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.onChange} />
                </label>
                <label>
                    Last name:
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.onChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export { CreateEmployeeForm };