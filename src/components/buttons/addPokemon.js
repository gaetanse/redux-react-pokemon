import { Button } from "react-bootstrap"
import { BsPlusCircle } from "react-icons/bs"
import { useDispatch } from "react-redux"
import { getPokemon } from "../../service/pokemonService"

export default function AddPokemon(props) {
  const dispatch = useDispatch()
  function addPokemon(){
    getPokemon(props.id).then(res =>{
      dispatch({
          type: "ADD-POKEMON-CAPTURE",
          payload: res.data
      })
    })
  }
  return (
    <Button className="btn btn-success" onClick={addPokemon}><BsPlusCircle/>&nbsp;&nbsp;&nbsp;Add</Button>
  )
}
