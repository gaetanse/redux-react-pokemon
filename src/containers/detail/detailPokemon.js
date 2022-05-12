import { useState,useEffect} from "react"
import { getPokemon } from "../../service/pokemonService"
import { useLocation, useNavigate } from "react-router-dom"
import { Row,Col } from "react-bootstrap"
import GoBack from "./../../components/buttons/goBack"
import AddPokemon from "./../../components/buttons/addPokemon"
import ModalPokemon from "../../components/modal/ModalPokemon"

export default function DetailPokemon(props) {

    const [pokemon,setPokemon] = useState([])
    const {state} = useLocation()

    useEffect(() =>{
        getPokemon(state.id).then(res =>{
          setPokemon(res.data)
        })
    }, [])

  return (
    <div>
      {
        pokemon !== 0 && 
          <div>
          <Row>
            <Col className="mx-4 " style={{background: "white",borderRadius: "15px"}}>
              <Row style={{color:"black",textTransform: "uppercase",fontSize: "25px"}}><strong>{pokemon.name}</strong></Row>
              <Row className="d-flex justify-content-center">{
                pokemon.sprites !== undefined ?
                <img src={pokemon.sprites.front_default} style={{width:"55%",height: "55%"}}></img>
                : <div></div>
              }
              </Row>
              <Row style={{margin: "auto auto",width: "30%"}}><AddPokemon id={state.id}/></Row>
            </Col>
            <Col className="mx-4" style={{background: "white",borderRadius: "15px"}}>
              <strong>HEIGHT</strong><br/>
              {pokemon.height}<br/>
              <strong>WEIGHT</strong><br/>
              {pokemon.weight}<br/>
              <strong>XP</strong><br/>
              {pokemon.base_experience}<br/>
              <strong>ABILITIES</strong><br/>
              {
                pokemon.abilities !== undefined ?
                pokemon.abilities.map((e,i)=>{
                  return(
                    <p className="my-2" style={{margin: "auto auto",backgroundColor:"violet",borderRadius: "10px",width: "30%"}} key={i}>{e.ability.name}</p>
                  )
                })
                :<div></div>
              }
              <strong>TYPES</strong><br/>
              {
                pokemon.types !== undefined ?
                pokemon.types.map((e,i)=>{
                  return(
                    <p className="my-2" style={{margin: "auto auto",backgroundColor:"purple",borderRadius: "10px",width: "30%"}} key={i}>{e.type.name}</p>
                  )
                })
                :<div></div>
              }
            </Col>
          </Row>
          <div className="my-4" style={{backgroundColor:"white",borderRadius: "15px"}}>
          <Row style={{display: "inline"}}>
            <strong>MOVES</strong><br/>
              {
                pokemon.moves !== undefined ?
                pokemon.moves.map((e,i)=>{
                  return(
                    <div style={{display: "inline",backgroundColor: "pink",border: "solid white 2px",borderRadius: "10px",width: "30%"}} key={i}>{e.move.name}</div>
                  )
                })
                :<div></div>
              }
          </Row>
          </div>
          <Row className="mx-2" style={{width: "20%"}}>
            <GoBack/>
          </Row>
            <ModalPokemon/>
        </div>
      }
    </div>
  )
}
