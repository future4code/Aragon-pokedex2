import { useContext, useEffect } from "react";
import Header from "../components/Header";
import PokeCard from "../components/PokeCard";
import GlobalStateContext from "../global/GlobalStateContext";
import PokeListPageStyle from "./PokeListPageStyle";

function PokeListPage() {
  const { states, setters, getters } = useContext(GlobalStateContext);

  const { pokeList, pokemons, pokedex, page, isLoading } = states;

  const { setPage } = setters;

  const { getPokeList, getAllPokeDetails } = getters;

  useEffect(() => {
    if (!pokeList.length) {
      getPokeList();
    } else {
      getAllPokeDetails();
    }
  }, [pokeList]);

  const changePage = (sum) => {
    const nextPage = page + sum;

    setPage(nextPage);
    getPokeList(nextPage);
  };

  const showPokeList =
    pokemons[0] && !isLoading ? (
      pokemons
        .filter((pokemon) => {
          for (let poke of pokedex) {
            if (poke.id === pokemon.id) {
              return false;
            }
          }
          return true;
        })
        .map((pokemon) => {
          return (
            <PokeCard
              key={pokemon.id}
              pokemon={pokemon}
              actualPage={"pokelist"}
            />
          );
        })
    ) : (
      <p className="ball"></p>
    );

  return (
    <PokeListPageStyle>
      <Header actualPage={"pokelist"} />
      <main>
        
        <nav className="container-nvg">
          {page !== 1 && (
            <button className="navigation-btn" onClick={() => changePage(-1)}>
              &#171;
            </button>
          )}
          <span>Página {page}</span>
          {pokeList.length && (
            <button className="navigation-btn" onClick={() => changePage(1)}>
              &#187;
            </button>
          )}
        </nav>

        <nav className="container-cards">{showPokeList}</nav>

      </main>

      <footer className="footer">
       <button id="top-btn">Voltar ao topo</button>
      </footer>

    </PokeListPageStyle>
  );
}

export default PokeListPage;