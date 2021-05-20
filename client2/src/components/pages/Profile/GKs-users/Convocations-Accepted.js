import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import SideBar from "../../../layout/Profile-side-bar/SideBar";
import ConvocationService from './../../../../service/convocations.service'
import ConvocationsAcceptedCard from "./Convocations-Accepted-Card";



class ConvocationsAccepted extends Component {

    constructor() {
        super()
        this.state = {
            convocations: []
        }
        this.convocationsService = new ConvocationService()
    }

    componentDidMount() {
        this.loadGkConvocations()
    }

    loadGkConvocations() {

        this.convocationsService
            .gkConvocations()
            .then(response => this.setState({ convocations: response.data }))
            .catch(err => console.log('error', err))
    }

    render() {

        const { convocations } = this.state

        return (

            <Container>
                <SideBar {...this.props} />
                <h1>Accepted Convocations</h1>
                <hr />
                <Row>
                    {convocations.map(elm => <ConvocationsAcceptedCard key={elm._id} {...elm} loggedUser={this.props.loggedUser} refreshConvocations={() => this.loadGkConvocations()} />)}
                </Row>
            </Container>
        )
    }
}

export default ConvocationsAccepted