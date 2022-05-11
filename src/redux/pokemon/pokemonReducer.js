const INITIAL_STATE = {
    listePokemons : []
}

function PokemonReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADDPOKEMON': {
            return{
                ...state,
                listePokemons: [...state.listePokemons, action.payload]
            }
        }
        default: return state
    }
}

export default PokemonReducer