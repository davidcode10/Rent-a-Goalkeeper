import { Component } from "react";
import { Container } from 'react-bootstrap'
import LoginForm from "./Login-form";


const Login = ({ storeUser, history }) => {

    return (

        <Container>
            <h1>Login</h1>
            <hr />
            <LoginForm storeUser={storeUser} history={history} />
        </Container>
    )
}

export default Login