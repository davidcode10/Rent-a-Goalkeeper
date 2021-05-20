import { Button, Container, Form, Modal } from 'react-bootstrap'

const NewConvocationForm = ({ }) => {

    return (
        <Form onSubmit={e => this.handleSubmit(e)}>

            <Form.Group controlId="localName">
                <Form.Label>Local Name</Form.Label>
                <Form.Control type="text" value={this.state.localName} onChange={e => this.handleInputChange(e)} name="localName" />
            </Form.Group>

            <Form.Group controlId="location">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" value={this.state.location} onChange={e => this.handleInputChange(e)} name="location" />
            </Form.Group>

            <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Check type="checkbox" value="FUTSAL" onChange={e => this.handleInputChange(e)} label="Futsal" name="category" />
                <Form.Check type="checkbox" value="FOOTBALL 7" onChange={e => this.handleInputChange(e)} label="Football 7" name="category" />
                <Form.Check type="checkbox" value="FOOTBALL 11" onChange={e => this.handleInputChange(e)} label="Football 11" name="category" />
            </Form.Group>

            <Form.Group controlId="matchDate">
                <Form.Label>Date</Form.Label>
                <Form.Control type="datetime-local" name="matchDate" value={this.state.matchDate} onChange={e => this.handleInputChange(e)} />
            </Form.Group>

            <Form.Group controlId="matchDuration">
                <Form.Label>Match duration/hour(s)</Form.Label>
                <Form.Control type="number" name="matchDuration" value={this.state.matchDuration} onChange={e => this.handleInputChange(e)} />
            </Form.Group>

            <Form.Group controlId="numberOfGks">
                <Form.Label>GKs needed (max. 2)</Form.Label>
                <Form.Control type="number" value={this.state.numberOfGks} name="numberOfGks" onChange={e => this.handleInputChange(e)} />
            </Form.Group>

            <Button variant="dark" style={{ width: '100%' }} type="submit">
                Create Convocation
                </Button>
        </Form>
    )
}

export default NewConvocationForm