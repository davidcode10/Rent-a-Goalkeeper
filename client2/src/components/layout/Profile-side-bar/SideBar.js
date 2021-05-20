import { Link } from "react-router-dom"
import { Figure, Nav } from 'react-bootstrap'
import './SideBar.css'


const SideBar = ({ loggedUser }) => {


    return (

        <>
            <p>And I'm the side bar</p>

            {/* <ListGroup variant="flush">
                <ListGroup.Item><Link to='/profile/edit'>Profile settings</Link></ListGroup.Item>
                
                <ListGroup.Item><Link to='/profile/favorites'>Favorites Gks</Link></ListGroup.Item>
                <ListGroup.Item><Link to='/profile/myconvocations'>My convocations</Link></ListGroup.Item>
                
                <ListGroup.Item><Link to='/profile/acceptedconvocations'>Accepted convocations</Link></ListGroup.Item>
                <ListGroup.Item><Link to='/profile/convocationssended'>Convocations sended to you</Link></ListGroup.Item>
            </ListGroup> */}
            <Nav className="col-md-12 block bg sidebar"
                activeKey="/home"
                onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src=''
                    />
                    <Figure.Caption>

                    </Figure.Caption>
                </Figure>
                <Nav.Item>
                    <Nav.Link><Link to='/profile/edit'>Profile settings</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link><Link to='/profile/favorites'>Favorites Gks</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link><Link to='/profile/myconvocations'>My convocations</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to='/profile/acceptedconvocations'>Accepted convocations</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link><Link to='/profile/convocationssended'>Convocations sended to you</Link></Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
}

export default SideBar