import { Link } from "react-router-dom"
import { Figure, Nav, Container } from 'react-bootstrap'
import './SideBar.css'


const SideBar = ({ loggedUser }) => {


    return (

        <>
            <Nav className="col-md-12 block bg sidebar"
                activeKey="/home"
                onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <Container>
                    <h1>Welcome to your profile {loggedUser.username}</h1>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src={loggedUser.imageUrl}
                        />
                        <Figure.Caption>
                            <h1>{loggedUser.username}</h1>
                        </Figure.Caption>
                    </Figure>
                    <Nav.Item>
                        <Nav.Link className='profile-link'><Link className='a' to='/profile/edit'>Profile settings</Link></Nav.Link>
                    </Nav.Item>
                    {
                        loggedUser.role === 'USER' ?
                            <>
                                <Nav.Item>
                                    <Nav.Link className='profile-link'><Link className='a' to='/profile/favorites'>Favorites Gks</Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className='profile-link'><Link className='a' to='/profile/myconvocations'>My convocations</Link></Nav.Link>
                                </Nav.Item>
                            </>
                            :
                            <>
                                <Nav.Item>
                                    <Nav.Link className='profile-link'>
                                        <Link className='a' to='/profile/acceptedconvocations'>Accepted convocations</Link>
                                    </Nav.Link>
                                </Nav.Item>
                            </>
                    }
                </Container>
            </Nav>
        </>
    )
}

export default SideBar