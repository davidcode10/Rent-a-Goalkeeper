import { Component } from "react";
import SideBar from './../../../layout/Profile-side-bar/SideBar'
import ConvocationsList from "../../Convocations/Convocations List/Convocations-list";
import ConvocationsService from "../../../../service/convocations.service";


class MyConvocations extends Component {
    constructor() {
        super()
        this.state = { convocations: [] }
        this.convocationService = new ConvocationsService()
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

    render() {

        return (

            <>
                <hr />
                <SideBar {...this.props} />
                <p></p>
                <ConvocationsList loggedUser={this.props.loggedUser} convocations={this.state.convocations} />
            </>
        )
    }
}

export default MyConvocations