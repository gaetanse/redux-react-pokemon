import { useState,useEffect} from "react"
import { getPokemon } from "../../service/pokemonService"
import { useLocation } from "react-router-dom"
import { Row,Col } from "react-bootstrap"
import GoBack from "./../../components/buttons/goBack"
import AddPokemon from "../../components/buttons/addPokemon"
import ModalPokemon from "../../components/modal/ModalPokemon"

export default function DetailPokemon(props) {

    const [pokemon,setPokemon] = useState([])
    const {state} = useLocation()
    const [val,setVal] = useState(undefined)

    useEffect(() =>{
        getPokemon(state.id).then(res =>{
          setPokemon(res.data)
        })

        if(state.id<10){
          setVal("00"+state.id)
        }
        else if(state.id<100){
          setVal("0"+state.id)
        }
        else if(state.id<999){
          setVal(state.id)
        }
    }, [])

  return (
    <div>
      {
        pokemon !== 0 && 
          <div>
          <Row>
            <Col className="mx-1 my-1" style={{background: "white",borderRadius: "15px",padding:"2% 2%",border:"1px solid black",boxShadow:"2px 2px 2px black"}} sm>
              <Row style={{color:"black",textTransform: "uppercase",fontSize: "25px"}}><strong>{pokemon.name}</strong></Row>
              <Row className="d-flex justify-content-center">{
                pokemon.sprites !== undefined ?
                <img src={"https://raw.githubusercontent.com/harshit23897/Pokemon-Sprites/master/assets/imagesHQ/"+val+".png"} style={{width:"75%",height: "auto"}} alt="pokemon"></img>
                : <div></div>
              }
              </Row>
              <Row style={{margin: "auto auto",width: "auto"}}><AddPokemon id={state.id}/></Row>
            </Col>
            <Col xs className="mx-1 my-1" style={{background: "white",borderRadius: "15px",padding:"2% 2%",border:"1px solid black",boxShadow:"2px 2px 2px black"}}>
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
          <div className="my-4" style={{backgroundColor:"white",borderRadius: "15px",border:"1px solid black",boxShadow:"2px 2px 2px black"}}>
          <Row style={{margin: "auto auto"}}>
            <strong>MOVES</strong><br/>
              {
                pokemon.moves !== undefined ?
                pokemon.moves.map((e,i)=>{
                  return(
                    <div className="mx-1" style={{backgroundColor: "pink",width:"auto",border: "solid white 1px",borderRadius: "10px"}} key={i}>{e.move.name}</div>
                  )
                })
                :<div></div>
              }
          </Row>
          </div>
          <Row className="mx-2" style={{width: "15%"}}>
            <GoBack/>
          </Row>
            <ModalPokemon/>
        </div>
      }
    </div>
  )
}
