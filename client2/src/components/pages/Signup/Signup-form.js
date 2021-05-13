import { Component } from "react";
import { Form, Button } from 'react-bootstrap'
import AuthService from './../../../service/auth.service'
import UploadsService from './../../../service/uploads.service'


class SignUpForm extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            role: ['USER', 'GOALKEEPER'],
            imageUrl: '',
            isUploading: false
        }
        this.authService = new AuthService()
        this.uploadsService = new UploadsService()
    }

    handleInputChange(e) {
        const value = e.target.value
        const name = e.target.name
        this.setState({ [name]: value })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.authService
            .signup(this.state)
            .then(response => {
                this.props.history.push('/login')
            })
            .catch(err => {
                console.log('error!', err)
            })
    }

    handleFileUpload(e) {

        this.setState({ isUploading: true })

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        this.uploadsService
            .uploadimage(uploadData)
            .then(response => this.setState({ isUploading: false, imageUrl: response.data.secure_url }))
            .catch(err => console.log(err))
    }

    render() {

        return (

            <Form onSubmit={e => this.handleSubmit(e)}>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" value={this.state.username} onChange={e => this.handleInputChange(e)} placeholder="Enter username" name='username' />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={this.state.password} onChange={e => this.handleInputChange(e)} placeholder="Password" name='password' />
                </Form.Group>
                <Form.Group controlId="role">
                    <Form.Check type="checkbox" value="USER" onChange={e => this.handleInputChange(e)} label="I want a GoalKeeper" name="role" />
                    <Form.Check type="checkbox" value="GOALKEEPER" onChange={e => this.handleInputChange(e)} label="I am a GoalKeeper" name="role" />
                </Form.Group>
                <Form>
                    <Form.Group controlId='imageUrl'>
                        <Form.File id="exampleFormControlFile1" label="Upload your photo" onChange={e => this.handleFileUpload(e)} />
                    </Form.Group>
                </Form>
                <Button variant="dark" style={{ backgroundColor: '#6113b1', border: 'none' }} type="submit" disabled={this.state.isUploading}>
                    {this.state.isUploading ? 'Wait...' : 'Submit'}
                </Button>
            </Form >
        )
    }
}

export default SignUpForm