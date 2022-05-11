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
            </Col>
          </Row>
          <Row>
          </Row>
          <Row>
            <GoBack/>
          </Row>
        </div>
      }
    </div>
  )
}
