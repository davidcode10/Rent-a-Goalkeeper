import './Index-page.css'
import { Link } from 'react-router-dom'
import IndexImage from './GK.jpg'
import { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

let style = {
    backgroundImage: `url(${IndexImage})`
}


class IndexPage extends Component {

    render() {

        return (



            <div
                className='bg-image'
                style={style}
            >
                <Container>
                    <section>
                        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                            <div>
                                <div className='text'>
                                    <h1>Rent a Goalkeeper</h1>
                                    <h4>See you at the match</h4>
                                    <div className='login-signup-btn'>
                                        <Link className='btn btn-outline-light btn-lg start-btn' to='/signup' role='button'>
                                            Start Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <section>
                                <Row>
                                    <Col className='ol-col-1'>
                                        <h1>How it works</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={6} className='ol-col'>
                                        <h1>Need a Goalkeeper?</h1>
                                        <ol>
                                            <li>Register</li>
                                            <li>Create a Convocation</li>
                                            <li>Wait for the goalkeepers to accept your invitation.</li>
                                        </ol>
                                    </Col>
                                    <Col xs={6} className='ol-col'>
                                        <h1>Are you a goalkeeper?</h1>
                                        <ol>
                                            <li>Register as a goalkeeper</li>
                                            <li>Accept and defend matches</li>
                                        </ol>
                                    </Col>
                                </Row>
                            </section>
                        </div>
                    </section>

                </Container>
            </div>

        )
    }
}

export default IndexPage