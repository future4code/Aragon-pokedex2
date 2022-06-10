import { useContext, useEffect } from "react";
import Header from "../components/Header";
import PokeCard from "../components/PokeCard";
import GlobalStateContext from "../global/GlobalStateContext";
import PokeListPageStyle from "./PokeListPageStyle";
import poster from "../assets/poster.png"
import video from "../assets/video.mp4"

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
      <div className="container-loading">
      <p id="loading-img" className="ball"></p>
      </div>
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
          <span className="page-number">Página {page}</span>
          {pokeList.length && (
            <button className="navigation-btn" onClick={() => changePage(1)}>
              &#187;
            </button>
          )}
        </nav>

        <nav className="container-cards">{showPokeList}</nav>

      </main>

      <footer className="footer">
       <video width="700" poster={poster} controls autoplay>
            <source src={video} type="video/mp4"></source>
          </ video>
       <a className="topo" href="#" >VOLTAR AO TOPO</a>
      </footer>

    </PokeListPageStyle>
  );
}

export default PokeListPage;