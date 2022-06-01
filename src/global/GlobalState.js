import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../constants/urls";

export const GlobalContext = createContext();

function GlobalState(props) {

  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/list?limit=20&offset=0`)

      const requests = res.data.map((item) =>
        axios.get(`${BASE_URL}/${item.name}`)
      )

      const responses = await Promise.all(requests)
      
      const list = responses.map((item) => item.data)
      setPokemons(list)
      
    } catch (err) {
      console.error("Erro ao buscar lista de Pokemons")
    }
  }

  useEffect(() => {
    getPokemons()                      
  },[])

const states = { pokemons : pokemons };                                                                                     

const setters = { setPokemons : setPokemons };

const getters = { getPokemons : getPokemons };

const context = ( states, setters, getters )

return (
  <GlobalContext.Provider value={context}>
    {props.children}
  </GlobalContext.Provider>
)
};

export default GlobalState