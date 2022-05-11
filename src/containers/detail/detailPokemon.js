import { useState,useEffect} from "react"
import { getPokemon } from "../../service/pokemonService"
import { useLocation, useNavigate } from "react-router-dom"
import { Row,Col } from "react-bootstrap"
import GoBack from "./../../components/buttons/goBack"
import AddPokemon from "./../../components/buttons/addPokemon"

export default function DetailPokemon(props) {

    const [pokemon,setPokemon] = useState([])
    const {state} = useLocation()

    useEffect(() =>{
        getPokemon(state.id).then(res =>{
          console.log(res.data)
          setPokemon(res.data)
        })
    }, [])

  return (
    <div>
      {
        pokemon !== 0 && 
          <div>
          <Row>
            <Col>
              {pokemon.name}<br/>
              {
                pokemon.sprites !== undefined ?
                <img src={pokemon.sprites.front_default}></img>
                : <div></div>
              }<br/>
              <AddPokemon/>
            </Col>
            <Col>
              HEIGHT<br/>
              {pokemon.height}<br/>
              WEIGHT<br/>
              {pokemon.weight}<br/>
              XP<br/>
              {pokemon.base_experience}<br/>
              ABILITIES<br/>
              {
                pokemon.abilities !== undefined ?
                pokemon.abilities.map((e,i)=>{
                  return(
                    <p key={i}>{e.ability.name}</p>
                  )
                })
                :<div></div>
              }<br/>
              TYPES<br/>
              {
                pokemon.types !== undefined ?
                pokemon.types.map((e,i)=>{
                  return(
                    <p key={i}>{e.type.name}</p>
                  )
                })
                :<div></div>
              }
            </Col>
          </Row>
          <Row>
            MOVES<br/>
              {
                pokemon.moves !== undefined ?
                pokemon.moves.map((e,i)=>{
                  return(
                    <p key={i}>{e.move.name}</p>
                  )
                })
                :<div></div>
              }
          </Row>
          <Row>
            <GoBack/>
          </Row>
        </div>
      }
    </div>
  )
}
