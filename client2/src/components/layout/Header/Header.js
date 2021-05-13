import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Header.css'

import AuthService from './../../../service/auth.service'

const Header = ({ loggedUser, storeUser }) => {

    const logout = () => {

        const authService = new AuthService()

        authService
            .logout()
            .then(() => {
                storeUser(undefined)
            })
            .catch(err => console.log('error!!!', err))
    }

    return (

        <>

            <Navbar bg='#54595F' className="navbar justify-content-between">

                <Container>

                    <Link to="/" className="nav-link">Rent a GoalKeeper</Link>
                    <Link to='/convocations' className="nav-link">Convocations</Link>

                    <Nav className="ml-auto">

                        <>
                            <Link to="/signup" className="mr-nav-link">Sign Up</Link>
                            <Link to="/login" className="mr-nav-link">Log In</Link>
                        </>
                        <>
                            <Link to="/profile" className="profile-btn">Profile</Link>
                            <Button type='submit' onClick={() => logout()} className="nav-link">Log Out</Button>
                        </>


                        <span className="nav-link">| Hello, {loggedUser ? loggedUser.username : 'invitado'}</span>
                    </Nav>

                </Container>

            </Navbar>

            <hr />

        </>
    )
}

export default Header