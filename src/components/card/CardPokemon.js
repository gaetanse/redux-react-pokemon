import React from 'react'
import './card.css'
import { Row,Col,Card } from "react-bootstrap"

export default function CardPokemon(props) {
  return (
    <Col key={props.id}>
        <Card style={{ width: '200px', height: '200px' }}>
            <Card.Body>
                <Card.Text>{props.id}</Card.Text>
                <Card.Text>{props.name}</Card.Text>
            </Card.Body>
        </Card>
    </Col>
  )
}
