import { Card, Button } from 'react-bootstrap'


const ConvocationCard = ({ localName, location, category, matchDate, matchDuration, numberOfGks, goalkeeper, owner }) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Text>@{owner}</Card.Text>
                <Card.Title>{localName}</Card.Title>
                <Card.Text><strong>Adress: </strong> {location}</Card.Text>
                <Card.Text><strong>Category: </strong> {category}</Card.Text>
                <hr />
                <Card.Text><strong>Date: </strong> {matchDate}</Card.Text>
                <Card.Text>{matchDuration}</Card.Text>
                <Card.Text>We need: {numberOfGks}</Card.Text>
                <Card.Text>{goalkeeper.username}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default ConvocationCard