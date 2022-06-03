import { useContext } from "react";
import Header from "../components/Header";
import PokeCard from "../components/PokeCard";
import GlobalStateContext from "../global/GlobalStateContext";
import PokedexPageStyle from "./PokedexPageStyle";

export function PokedexPage() {
  const { states } = useContext(GlobalStateContext);

  const { pokedex } = states;

  const showPokedex = pokedex.map((pokemon) => {
    return (
      <PokeCard key={pokemon.id} pokemon={pokemon} actualPage={"pokedex"} />
    );
  });

  return (
    <>
      <PokedexPageStyle>
        <Header actualPage={"pokedex"} />
        <main>{showPokedex}</main>
        
      </PokedexPageStyle>
    </>
  );
}

export default PokedexPage;