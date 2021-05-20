import { Component } from "react";
import SideBar from "../../layout/Profile-side-bar/SideBar";


class Profile extends Component {

    render() {

        return (

            <>
                <h1>I'm your profile</h1>

                <SideBar {...this.props} />
            </>
        )
    }
}

export default Profile