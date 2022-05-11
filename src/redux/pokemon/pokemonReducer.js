const INITIAL_STATE = {
    listePokemons : []
}

function PokemonReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'UPDATE': {
            return{
                ...state,
                listeArticles: [...state.listeArticles, action.payload]
            }
        }
        default: return state
    }
}

export default PokemonReducer