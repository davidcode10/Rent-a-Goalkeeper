import { Component } from "react";
import { Modal, Figure } from 'react-bootstrap'


class GkCard extends Component {
    constructor() {
        super()
    }
    render() {

        return (

            <>
                <Modal.Header closeButton>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src={this.props.goalkeeper.imageUrl}
                        />
                        <Figure.Caption>

                        </Figure.Caption>
                    </Figure>
                </Modal.Header>
                <Modal.Body>
                    <h4>{this.props.goalkeeper.username}</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
            </>
        )
    }
}

export default GkCard