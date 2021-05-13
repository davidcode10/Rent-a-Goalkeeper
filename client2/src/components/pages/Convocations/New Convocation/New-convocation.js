import { Component } from 'react'
import { Button, Form, Dropdown, DropdownButton } from 'react-bootstrap'


class NewConvocation extends Component {

    constructor() {
        super()
        this.state = {
            localName: '',
            location: '',
            category: '',
            date: '',
            matchDuration: '',
            numberOfGks: ''
        }
    }

    render() {
        return (
            <Form onSubmit={e => this.handleSubmit(e)}>

                <Form.Group controlId="localName">
                    <Form.Label>Local Name</Form.Label>
                    <Form.Control type="text" onChange={e => this.handleInputChange(e)} name="localName" />
                </Form.Group>

                <Form.Group controlId="location">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" onChange={e => this.handleInputChange(e)} name="location" />
                </Form.Group>

                <DropdownButton controlId="category" title="Category">
                    <Dropdown.Item>Futsal</Dropdown.Item>
                    <Dropdown.Item>Football 7</Dropdown.Item>
                    <Dropdown.Item>Football 11</Dropdown.Item>
                </DropdownButton>

                <Form.Group controlId="date">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" name="date" />
                </Form.Group>

                <Form.Group controlId="matchDuration">
                    <Form.Label>Match duration</Form.Label>
                    <Form.Control type="number" name="matchDuration" />
                </Form.Group>

                <Form.Group controlId="numberOfGks">
                    <Form.Label>GKs needed (max. 2)</Form.Label>
                    <Form.Control type="number" name="numberOfGks" />
                </Form.Group>

                <Button variant="dark" style={{ width: '100%' }} type="submit">
                    Create Convocation
                </Button>

            </Form>
        )
    }
}

export default NewConvocation