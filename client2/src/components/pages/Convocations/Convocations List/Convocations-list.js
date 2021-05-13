import { Component } from 'react'
import { Container } from 'react-bootstrap'
import ConvocationCard from '../Convocation Card/Convocation-Card'
import NewConvocation from '../New Convocation/New-convocation'
import ConvocationService from './../../../../service/convocations.service'

class ConvocationsList extends Component {

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
                <h1>Check matches to defend</h1>
                <hr />
                <NewConvocation />
                <hr />
                {convocations.map(elm => <ConvocationCard key={elm._id} {...elm} />)}
            </Container>
        )
    }
}

export default ConvocationsList