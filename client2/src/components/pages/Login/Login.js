import { Component } from "react";
import { Container } from 'react-bootstrap'
import LoginForm from "./Login-form";


class Login extends Component {

    render() {

        return (

            <Container>
                <h1>Login</h1>
                <hr />
                <LoginForm />
            </Container>
        )
    }
}

export default Login