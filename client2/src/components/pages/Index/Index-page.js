import './Index-page.css'
import { Link } from 'react-router-dom'
import IndexImage from './GK.jpg'
import { Component } from 'react'
import { Container } from 'react-bootstrap'

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
                    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                        <div>
                            <div className='text'>
                                <h1>Rent a Goalkeeper</h1>
                                <h4>Subheading</h4>
                                <>
                                    <Link className='btn btn-outline-light btn-lg' to='/signup' role='button'>
                                        Start Now
                                </Link>
                                </>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

        )
    }
}

export default IndexPage