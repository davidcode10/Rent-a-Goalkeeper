import { Component } from "react";
import { Modal, Figure } from 'react-bootstrap'


class GkCard extends Component {
    constructor() {
        super()
    }
    render() {

        return (

            <>
                <Modal.Header>
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
                    <h4>Goalkeeper: {this.props.goalkeeper.username}</h4>
                </Modal.Body>
            </>
        )
    }
}

export default GkCard