import {configureStore} from '@reduxjs/toolkit'
//import UpdateReducer from './../reducer/UpdateReducer'

const store = configureStore({reducer: PokemonReducer})

export default store