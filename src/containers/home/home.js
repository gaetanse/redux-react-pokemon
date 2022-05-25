import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import CardPokemon from "../../components/card/CardPokemon"
import { getPokemons } from "../../service/pokemonService"
import { Row } from "react-bootstrap"
import ModalPokemon from "../../components/modal/ModalPokemon"

export default function Home() {

    const dispatch = useDispatch()
    const listePokemons = useSelector(state=>state.listePokemons)

    useEffect(() =>{
        getPokemons().then(res =>{
            const data = res.data.results
            data.map(e=>{
                return(
                    dispatch({
                        type: "ADD-POKEMON",
                        payload: e
                    })
                )
            })
        })
    }, [])

    return (
        <div>
            <Row md={6} className="g-4">

                {
                    listePokemons.lenght !==0 ?
                    listePokemons.map((e,i)=>{
                        return(
                            <CardPokemon key={i} id={i+1} name={e.name}/>
                        )
                    })
                    :<div></div>
                }
            </Row>
            <ModalPokemon/>
        </div>
    )
}