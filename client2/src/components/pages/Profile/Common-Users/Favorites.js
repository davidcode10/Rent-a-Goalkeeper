import { Component } from "react";
import SideBar from "../../../layout/Profile-side-bar/SideBar"
import { Container, Row, Button, Modal, Form } from 'react-bootstrap'
import AuthService from './../../../../service/auth.service'
import ConvocationService from './../../../../service/convocations.service'
import FavoritesCard from "./Favorites-Card"


class Favorites extends Component {

    constructor() {
        super()
        this.state = {
            favoritesGks: [],
            showModal: false,
            convocation: {
                localName: '',
                location: '',
                category: '',
                matchDate: Date,
                matchDuration: 0,
                numberOfGks: 0,
                //owner: this.props.loggedUser
            }
        }
        this.authService = new AuthService()
        this.convocationService = new ConvocationService()
    }

    componentDidMount() {
        this.loadFavoritesGks()
    }

    loadFavoritesGks() {

        this.authService
            .getAllGksFollowed()
            .then(response => {
                console.log(response.data)
                this.setState({ favoritesGks: response.data })
            })
            .catch(err => console.log('error', err))
    }

    openModal() {
        this.setState({ showModal: true })
    }

    render() {

        const { favoritesGks } = this.state

        return (

            <>
                <Modal
                    loggedUser={this.props.loggedUser}
                    show={this.state.showModal}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
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

                                <hr />
                                <Button variant="dark" style={{ width: '100%' }} type="submit">
                                    Send Convocation
                                </Button>

                            </Form>

                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.setState({ showModal: false })}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                <SideBar loggedUser={this.props.loggedUser} {...this.props} />

                <Container>
                    <Row>
                        {favoritesGks.map(elm => <FavoritesCard key={elm.id} {...elm} modal={(elm) => this.openModal(elm)} loggedUser={this.props.loggedUser} />)}
                    </Row>
                </Container>
            </>
        )
    }
}

export default Favorites