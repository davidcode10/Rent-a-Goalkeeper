import { Component } from 'react'
import { Container, Modal, Row, Button } from 'react-bootstrap'
import ConvocationCard from '../Convocation Card/Convocation-Card'
import ConvocationService from '../../../../service/convocations.service'
import AuthService from './../../../../service/auth.service'
import GkCard from '../Convocation Card/Goalkeeper-Card'

class ConvocationsList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalShow: false
        }
        this.convocationsService = new ConvocationService()
        this.authService = new AuthService()
    }



    followGk(id) {

        this.authService
            .followGk(id, { state: true })
            .then(response => this.props.fetchUser())
            .catch(err => console.log(err))
    }

    openModal(goalkeeper) {
        this.setState({ modalShow: true, goalkeeper: goalkeeper })
    }

    render() {

        const { convocations } = this.props

        return (

            <Container>
                <>
                    <hr />
                    <h1>Your Convocations</h1>
                    <hr />
                    {this.state.goalkeeper && <Modal
                        loggedUser={this.props.loggedUser}
                        style={{ flexDirection: 'column' }}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        show={this.state.modalShow}
                    >
                        <GkCard goalkeeper={this.state.goalkeeper} />
                        <Modal.Footer>
                            {this.props.loggedUser?.favoritesGKs.some(elm => elm === this.state.goalkeeper._id) ? <Button>Following</Button> :
                                <Button onClick={() => this.followGk(this.state.goalkeeper._id)}>Follow</Button>
                            }
                            <Button onClick={() => this.setState({ modalShow: false })}>Close</Button>
                        </Modal.Footer>
                    </Modal>}
                    <Row>
                        {convocations.map(elm => <ConvocationCard key={elm._id} {...elm} showModal={(elm) => this.openModal(elm)} loggedUser={this.props.loggedUser} refreshConvocations={() => this.loadOwnerConvocations()} />)}
                    </Row>
                </>
            </Container >
        )
    }
}

export default ConvocationsList