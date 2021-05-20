import { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import ConvocationService from '../../../../service/convocations.service'
import AllConvocationCard from '../Convocation Card/AllConvocations-Card'

class AllConvocations extends Component {

    constructor() {
        super()
        this.state = {
            convocations: []
        }
        this.convocationsService = new ConvocationService()
    }

    componentDidMount() {
        this.loadConvocations()
    }

    loadConvocations() {

        this.convocationsService
            .getAllConvocations()
            .then(response => this.setState({ convocations: response.data }))
            .catch(err => console.log('Error!', err))
    }

    render() {

        const { convocations } = this.state

        return (

            <Container>
                <>
                    <hr />
                    <Row>
                        {convocations.map(elm => <AllConvocationCard key={elm._id} {...elm} loggedUser={this.props.loggedUser} refreshConvocations={() => this.loadConvocations()} />)}
                    </Row>
                </>
            </Container>
        )
    }
}

export default AllConvocations