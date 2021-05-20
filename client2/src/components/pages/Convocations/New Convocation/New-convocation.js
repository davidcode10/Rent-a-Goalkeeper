import { Component } from 'react'
import { Button, Container, Form, Modal, Row, Col } from 'react-bootstrap'
import ConvocationsList from '../Convocations List/Convocations-list'
import ConvocationsService from './../../../../service/convocations.service'
import IndexImage from './GK3.jpg'
import './New-convocation.css'

let style = {
    backgroundImage: `url(${IndexImage})`
}


class NewConvocation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            convocation: {
                localName: '',
                location: '',
                category: '',
                matchDate: Date,
                matchDuration: 0,
                numberOfGks: 0,
                owner: this.props.loggedUser,
                showModal: false
            },
            convocations: []
        }
        this.convocationService = new ConvocationsService()

    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ convocation: { ...this.state.convocation, [name]: value } })
    }


    componentDidMount() {
        this.loadOwnerConvocations()

    }

    loadOwnerConvocations() {
        this.convocationService
            .getOwnerConvocations()
            .then(response => this.setState({ convocations: response.data }))
            .catch(err => console.log('error', err))
    }

    handleSubmit(e) {

        e.preventDefault()
        this.convocationService
            .createConvocation(this.state.convocation)
            .then(() => {
                this.setState({ showModal: false })
                this.loadOwnerConvocations()
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div
                className='bg-img'
                style={style}
            >
                <Container>
                    <Modal
                        show={this.state.showModal}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Create convocation</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
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

                                <Button variant="dark" style={{ width: '100%' }} type="submit" className='create-btn'>
                                    Create Convocation
                            </Button>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => this.setState({ showModal: false })} >
                                Close
                        </Button>
                        </Modal.Footer>
                    </Modal>

                    <Button className='create-btn' onClick={() => this.setState({ showModal: true })}>Create Convocation</Button>


                    <hr />
                    <Row>
                        <Col className='ol-col-1'>
                            <h1>Your Convocations</h1>
                        </Col>
                    </Row>
                    <ConvocationsList convocations={this.state.convocations}  {...this.props} />
                </Container>
            </div>
        )
    }
}

export default NewConvocation