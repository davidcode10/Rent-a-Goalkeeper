import { Component } from "react"
import { Link } from "react-router-dom"
import { ListGroup } from 'react-bootstrap'


const SideBar = ({  }) => {


    return (

        <>
            <p>And I'm the side bar</p>


            <ListGroup variant="flush">
                <ListGroup.Item><Link to='/profile/edit'>Profile settings</Link></ListGroup.Item>
                {/* for common users */}
                <ListGroup.Item><Link to='/profile/favorites'>Favorites Gks</Link></ListGroup.Item>
                <ListGroup.Item><Link to='/profile/myconvocations'>My convocations</Link></ListGroup.Item>
                {/* for users GKs */}
                <ListGroup.Item><Link to='/profile/acceptedconvocations'>Accepted convocations</Link></ListGroup.Item>
                <ListGroup.Item><Link to='/profile/convocationssended'>Convocations sended to you</Link></ListGroup.Item>
            </ListGroup>
        </>
    )
}

export default SideBar