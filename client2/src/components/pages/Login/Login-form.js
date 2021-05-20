import { Component } from "react";
import { Form, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import AuthService from './../../../service/auth.service'


class LoginForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.authService = new AuthService()
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.authService
            .login(this.state)
            .then(response => {
                this.props.storeUser(response.data)
                this.props.history.push('/')
            })
            .catch(err => console.log(err))
    }

    render() {

        return (

            <div>
                <Form onSubmit={e => this.handleSubmit(e)}>
                    <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" value={this.state.username} onChange={e => this.handleInputChange(e)} placeholder="Enter username" name='username' />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={this.state.password} onChange={e => this.handleInputChange(e)} placeholder="Password" name='password' />
                    </Form.Group>
                    <Button variant="primary" style={{ backgroundColor: '#6113b1', border: 'none' }} type="submit">
                        Login
                </Button>
                    <small>Don't you have an account?<Link to='/signup'>Sign Up</Link></small>
                </Form>
            </div>
        )
    }
}

export default LoginForm