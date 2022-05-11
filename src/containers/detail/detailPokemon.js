import { useState,useEffect} from "react"
import { getPokemon } from "../../service/pokemonService"
import { useNavigate } from "react-router-dom"

export default function DetailPokemon(props) {

    const [pokemon,setPokemon] = useState([])
    const navigate = useNavigate()

    useEffect(() =>{
      console.log(props.route)
        getPokemon(props.id).then(res =>{
          setPokemon(res.data.sprites.front_default)
        })
    }, [])

  return (
    <div>

    </div>
  )
}
