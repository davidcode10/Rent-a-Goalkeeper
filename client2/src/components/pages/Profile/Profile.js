import { Component } from "react";
import SideBar from "../../layout/Profile-side-bar/SideBar";


class Profile extends Component {

    render() {

        return (

            <>
                <hr />
                <SideBar {...this.props} />
            </>
        )
    }
}

export default Profile