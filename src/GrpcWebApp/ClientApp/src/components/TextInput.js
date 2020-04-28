import React, { Component } from 'react'

class TextInput extends Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            value: this.props.value,
        }
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })
}