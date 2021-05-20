import { Card, Col } from 'react-bootstrap'
import './Convocation-Card.css'


const ConvocationCard = ({ localName, location, category, matchDate, matchDuration, numberOfGks, goalkeeper, showModal }) => {



    return (
        <Col md={3}>
            <Card className='convocations-card' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{localName}</Card.Title>
                    <Card.Text><strong>Adress: </strong> {location}</Card.Text>
                    <Card.Text><strong>Category: </strong> {category}</Card.Text>
                    <hr />
                    <Card.Text><strong>Date: </strong> {matchDate}</Card.Text>
                    <Card.Text>Time: {matchDuration} hour(s)</Card.Text>
                    <Card.Text>We need: {numberOfGks} Goalkeeper(s)</Card.Text>
                    {goalkeeper.length ? <Card.Text>GK(s) of your match: {goalkeeper.map(elm => <small onClick={() => showModal(elm)}><a>{elm.username}</a></small>)}</Card.Text> : <Card.Text>There's no Gks</Card.Text>}
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ConvocationCard