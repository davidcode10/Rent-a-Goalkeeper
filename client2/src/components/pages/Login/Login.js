import { Component } from "react";
import { Container } from 'react-bootstrap'
import LoginForm from "./Login-form"
import './Login.css'

const Login = ({ storeUser, history }) => {

    return (

        <div
        >
            <Container>
                <h1>Login</h1>
                <hr />
                <LoginForm storeUser={storeUser} history={history} />
            </Container>
        </div>
    )
}

export default Login