import { useContext } from "react";
import Header from "../components/Header";
import PokeCard from "../components/PokeCard";
import { GlobalContext } from "../global/GlobalState";

function PokeListPage() {
  const context = useContext(GlobalContext);

  const { pokemons } = context.states;

  return (
    <>
      <Header actualPage={"pokelist"} />
      <hr />
      <main>
        <h1>Lista de Pokemons</h1>
        {pokemons.map((pokemon) => (
          <PokeCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </main>
    </>
  );
}

export default PokeListPage;