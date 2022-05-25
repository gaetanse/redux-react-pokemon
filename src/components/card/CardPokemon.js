import React from 'react'
import './card.css'
import { Col,Card } from "react-bootstrap"
import { useEffect,useState } from 'react'
import { getPokemon } from "../../service/pokemonService"
import { useNavigate } from 'react-router-dom'

export default function CardPokemon(props) {

    const [val,setVal] = useState(undefined)
    const [url,setUrl] = useState("")
    const navigate = useNavigate()

    useEffect(() =>{
        getPokemon(props.id).then(res =>{
          setUrl(res.data.sprites.front_default)
        })

        console.log(props.id)

        if(props.id<10){
          setVal("00"+props.id)
        }
        else if(props.id<100){
          setVal("0"+props.id)
        }
        else if(props.id<999){
          setVal(props.id)
        }

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
          {
            url !== "" ?
            <Card style={{ width: 'auto', height: 'auto',border: "solid 1px #E2EF48" }}>

                      {val !== undefined ?
                      <Card.Img variant="top" src={"https://raw.githubusercontent.com/harshit23897/Pokemon-Sprites/master/assets/imagesHQ/"+val+".png"} style={{ width: 'auto', height: 'auto',background: "#F7F7F7" }} />
                      : <div></div>
                      }

                <Card.Body style={{color:"#E42F32"}}>
                    <Card.Text><strong>#{props.id}</strong></Card.Text>
                    <Card.Text style={{fontSize: "12px"}}><strong>{(props.name).toUpperCase()}</strong></Card.Text>
                </Card.Body>
            </Card>
            :<div></div>
          }
      </Col>
    )
}
