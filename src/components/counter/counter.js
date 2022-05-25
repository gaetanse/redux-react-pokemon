import { useSelector } from "react-redux"
import pokeball from './pokeball.png'

export default function Counter() {
  
  const listePokemonsCaptures = useSelector(state=>state.listePokemonsCaptures)

  return (
    <div className="mx-4" style={{color:"black"}}>
      <img src={pokeball} style={{width:"25px",height:"25px"}}></img>
      {listePokemonsCaptures.length}
      <br/>
      pokeballs
    </div>
  )
}
