import React from 'react'
import './card.css'
import { Row,Col,Card } from "react-bootstrap"
import { useEffect,useState } from 'react'
import { getPokemon } from "../../service/pokemonService"
import { useNavigate } from 'react-router-dom'

export default function CardPokemon(props) {

    const [url,setUrl] = useState("")
    const navigate = useNavigate()

    useEffect(() =>{
        getPokemon(props.id).then(res =>{
          setUrl(res.data.sprites.front_default)
        })
    }, [])

    function goToDetail(){
      navigate("/detail",{
        state:{
          id: props.id
        }
      })
    }

    return (
      <Col key={props.id} onClick={goToDetail}>
          <Card style={{ width: 'auto', height: 'auto',border: "solid 1px #E2EF48" }}>
                  <Card.Img variant="top" src={url} style={{ width: 'auto', height: 'auto',background: "#F7F7F7" }} />
              <Card.Body style={{color:"#E42F32"}}>
                  <Card.Text><strong>#{props.id}</strong></Card.Text>
                  <Card.Text style={{fontSize: "12px"}}><strong>{(props.name).toUpperCase()}</strong></Card.Text>
              </Card.Body>
          </Card>
      </Col>
    )
}
