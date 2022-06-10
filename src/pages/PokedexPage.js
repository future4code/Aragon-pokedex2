import { useContext } from "react";
import Header from "../components/Header";
import PokeCard from "../components/PokeCard";
import GlobalStateContext from "../global/GlobalStateContext";
import PokedexPageStyle from "./PokedexPageStyle";
import gif from "../assets/gif.gif"

export function PokedexPage() {
  const { states } = useContext(GlobalStateContext);

  const { pokedex } = states;

  const showPokedex = pokedex.map((pokemon) => {
    return (
      <PokeCard key={pokemon.id} pokemon={pokemon} actualPage={"pokedex"} />
    );
  });

  return (
      <PokedexPageStyle>
        <Header actualPage={"pokedex"} />

        <main className="grid-pokedex">{showPokedex}</main>
        <footer>
          
        <img className="gif-pokeball" src={gif} alt=""></img>

          <a className="topo" href="#">VOLTAR AO TOPO</a>
          
        </footer>
      </PokedexPageStyle>
  );
}

export default PokedexPage;