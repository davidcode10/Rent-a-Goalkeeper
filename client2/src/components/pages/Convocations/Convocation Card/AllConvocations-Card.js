import { Card, Button, Col, Figure } from 'react-bootstrap'
import './Convocation-Card.css'
import ConvocationsService from './../../../../service/convocations.service'


const AllConvocationCard = ({ localName, location, category, matchDate, matchDuration, numberOfGks, loggedUser, goalkeeper, _id, owner, refreshConvocations, state }) => {

    const acceptConvocation = () => {

        const convocationsService = new ConvocationsService()

        convocationsService
            .editOneConvocation(_id, { state: true, numberOfGks, goalkeeper, loggedUser })
            .then(() => refreshConvocations())
            .catch(err => console.log(err))
    }

    return (
        <Col md={3}>
            <Card className='convocations-card' style={{ width: '18rem' }}>
                <Card.Body>
                    <Figure>
                        <Figure.Image
                            width={100}
                            height={180}
                            style={{ borderRadius: '50%' }}
                            alt="171x180"
                            src={owner.imageUrl}
                        />
                        <Figure.Caption>

                        </Figure.Caption>
                    </Figure>
                    <Card.Text>@{owner ? owner.username : "desconocido"}</Card.Text>
                    <Card.Title>{localName}</Card.Title>
                    <Card.Text><strong>Adress: </strong> {location}</Card.Text>
                    <Card.Text><strong>Category: </strong> {category}</Card.Text>
                    <hr />
                    <Card.Text><strong>Date: </strong> {matchDate}</Card.Text>
                    <Card.Text>Time: {matchDuration} hour(s)</Card.Text>
                    <Card.Text>We need: {numberOfGks} Goalkeeper(s)</Card.Text>
                    {state && <Card.Text>The GK(s) {goalkeeper.map(elm => <small key={elm.username}>{elm.username}</small>)} has accepted the convocation</Card.Text>}
                    {
                        goalkeeper.some(elm => elm._id === loggedUser?._id) ? <Button>Ya ests apuntado</Button> : <Button onClick={() => acceptConvocation()}>Accept Convocation</Button>
                    }
                </Card.Body>
            </Card>
        </Col >
    )
}

export default AllConvocationCard