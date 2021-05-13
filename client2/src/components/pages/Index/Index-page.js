import './Index-page.css'
import { Link } from 'react-router-dom'
import IndexImage from './GK.jpg'
import { Component } from 'react'

let style = {
    backgroundImage: `url(${IndexImage})`
}


class IndexPage extends Component {

    render() {

        return (




            <div
                className='p-5 text-center bg-image'
                style={style}
            >
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h1 className='mb-3'>Rent a Goalkeeper</h1>
                            <h4 className='mb-3'>Subheading</h4>
                            <>
                                <Link className='btn btn-outline-light btn-lg' to='/signup' role='button'>
                                    Start Now
                                </Link>
                            </>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default IndexPage