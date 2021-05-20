import { Container } from 'react-bootstrap'
import SignUpForm from "./Signup-form"

const Signup = ({ history }) => {

    return (

        <div
        >
            <Container>
                <h1>Sign up!</h1>
                <hr />
                <SignUpForm history={history} />
            </Container>
        </div>
    )
}

export default Signup