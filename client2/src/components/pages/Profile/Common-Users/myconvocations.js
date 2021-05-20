import { Component } from "react";
import SideBar from './../../../layout/Profile-side-bar/SideBar'
import ConvocationsList from "../../Convocations/Convocations List/Convocations-list";


class MyConvocations extends Component {

    render() {

        return (

            <>
                <SideBar {...this.props} />
                <p>I'm your convocations</p>
                <ConvocationsList />
            </>
        )
    }
}

export default MyConvocations