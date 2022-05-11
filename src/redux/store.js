import {configureStore} from '@reduxjs/toolkit'
import PokemonReducer from './pokemon/pokemonReducer'

const store = configureStore({reducer: PokemonReducer})

export default store