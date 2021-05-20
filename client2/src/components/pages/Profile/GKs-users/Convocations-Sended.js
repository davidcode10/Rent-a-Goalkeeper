import { Component } from "react";
import SideBar from './../../../layout/Profile-side-bar/SideBar'


class ConvocationsSended extends Component {

    render() {

        return (

            <>
                <SideBar {...this.props} />
                <p>This is the convocations sended to youuuu</p>
            </>
        )
    }
}

export default ConvocationsSended