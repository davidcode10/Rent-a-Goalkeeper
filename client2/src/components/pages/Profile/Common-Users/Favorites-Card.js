import { Card, Col, Figure, Button } from 'react-bootstrap'

const FavoritesCard = ({ imageUrl, username, modal }) => {



    return (
        <>
            <Col md={3}>
                <Card className='convocations-card' style={{ width: '18rem' }}>
                    <Card.Body>
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={imageUrl}
                            />
                        </Figure>
                        <Card.Title>{username}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default FavoritesCard