import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "../../service/pokemonService"

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

        {
            listePokemons.map((e,i)=>{
                return(
                    <div>
                    <p>{i}</p>
                    <p>{e.name}</p>
                    <p>{e.url}</p>
                    </div>
                )
            })
        }

        </div>
    )
}