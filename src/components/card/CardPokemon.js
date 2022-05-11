import React from 'react'
import './card.css'
import { Row,Col,Card } from "react-bootstrap"
import { useEffect,useState } from 'react'
import { getPokemon } from "../../service/pokemonService"

export default function CardPokemon(props) {

    const [url,setUrl] = useState("")

    useEffect(() =>{
        getPokemon(props.id).then(res =>{
          setUrl(res.data.sprites.front_default)
          console.log(res.data.sprites.front_default)
        })
    }, [])

  return (
    <Col key={props.id}>
        <Card style={{ width: 'auto', height: 'auto' }}>
            <Card.Body>
                <Card.Img variant="top" src={url} style={{ width: 'auto', height: 'auto' }} />
                <Card.Text><strong>#{props.id}</strong></Card.Text>
                <Card.Text><strong>{(props.name).toUpperCase()}</strong></Card.Text>
            </Card.Body>
        </Card>
    </Col>
  )
}
