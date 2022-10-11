import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor () {
        super();
        this.state = {
            quote: '',
            by: '',
            date: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitEntry = event => {
        event.preventDefault();
        const newEntry = {
            id: Date.now(),
            ...this.state
        }
        this.props.addEntry(newEntry);
        this.clearInputs();
    }

    clearInputs = () => {
        this.setState({ quote: '', by: '', date: '' })
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Quote"
                    name="quote"
                    value={this.state.quote}
                    onChange={event => this.handleChange(event)}
                />
                <input
                    type="text"
                    placeholder="Author"
                    name="by"
                    value={this.state.by}
                    onChange={event => this.handleChange(event)}
                />
                <input
                    type="date"
                    name="date"
                    value={this.state.date}
                    onChange={event => this.handleChange(event)}
                />
                <button onClick={event => this.submitEntry(event)}>SUBMIT</button>
            </form>
        )
    }
}

export default Form;