import { useSelector } from "react-redux"
import pokeball from './pokeball.png'

export default function Counter() {
  
  const listePokemonsCaptures = useSelector(state=>state.listePokemonsCaptures)

  return (
    <div style={{color:"white"}}>
      <img src={pokeball} style={{width:"25px",height:"25px"}}></img>
      {listePokemonsCaptures.length}
      <br/>
      pokeballs
    </div>
  )
}
