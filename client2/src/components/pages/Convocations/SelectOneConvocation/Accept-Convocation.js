import { Component } from "react";
import ConvocationsService from "../../../../service/convocations.service";


class AcceptConvocation extends Component {

    constructor() {
        super()
        this.state = {
            convocation: []
        }
        this.convocationService = new ConvocationsService()
    }

    componentDidMount() {
        this.loadGkConvocations()
    }

    loadGkConvocations() {

        this.convocationService
            .gkConvocations()
            .then(response => this.setState({ convocation: response.data }))
            .catch(err => console.log('error', err))
    }

    render() {

        return (

            <>
                <h1>Accept Convocation</h1>
            </>
        )
    }
}

export default AcceptConvocation