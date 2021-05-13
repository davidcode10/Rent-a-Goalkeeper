import { Component } from "react";
import { Container } from 'react-bootstrap'
import SignUpForm from "./Signup-form";


const Signup = ({ history }) => {

        return (

            <Container>
                <h1>Sign up!</h1>
                <hr />
                <SignUpForm history={history} />
            </Container>
        )
}

export default Signup