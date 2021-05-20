import { Component } from "react"
import { Container, Form, Button } from "react-bootstrap"
import UploadsService from "../../../service/uploads.service"
import SideBar from '../../layout/Profile-side-bar/SideBar'
import AuthService from './../../../service/auth.service'
import './Profile.css'

class EditProfile extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            imageUrl: '',
            isUploading: false
        }
        this.authService = new AuthService()
        this.uploadService = new UploadsService
    }

    render() {

        return (
            <>
                <hr />
                <SideBar {...this.props} />

                <Container>
                    <hr />
                    <h1>Edit your profile</h1>
                    <hr />
                    <Form onSubmit={e => this.handleSubmit(e)}>
                        <Form.Group controlId="username">
                            <Form.Label className='p'>Username</Form.Label>
                            <Form.Control type="text" value={this.state.username} onChange={e => this.handleInputChange(e)} placeholder="Enter username" name='username' />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label className='p'>Password</Form.Label>
                            <Form.Control type="password" value={this.state.password} onChange={e => this.handleInputChange(e)} placeholder="Password" name='password' />
                        </Form.Group>
                        <Form>
                            <Form.Group controlId='imageUrl'>
                                <Form.File className='p' id="exampleFormControlFile1" label="Upload your photo " onChange={e => this.handleFileUpload(e)} />
                            </Form.Group>
                        </Form>
                        <hr />
                        <Button className='p' variant="dark" style={{ backgroundColor: '#6113b1', border: 'none' }} type="submit" disabled={this.state.isUploading}>
                            {this.state.isUploading ? 'Wait...' : 'Submit'}
                        </Button>
                    </Form >

                </Container>
            </>
        )
    }
}

export default EditProfile