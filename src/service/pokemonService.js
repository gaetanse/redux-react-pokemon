import axios from "axios";

const url = "https://pokeapi.co/api/v2/pokemon?limit=300";

export const getPokemon = () => {
    return axios.get(url);
}