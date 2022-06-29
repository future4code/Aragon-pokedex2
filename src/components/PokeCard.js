import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { navigateToPokeDetailsPage } from "../routes/coordinator";
import GlobalStateContext from "../global/GlobalStateContext";
import PokeCardStyle from "./PokeCardStyle";

function PokeCard(props) {
  const navigate = useNavigate();

  const { states, setters } = useContext(GlobalStateContext);

  const { pokedex } = states;

  const { setPokedex } = setters;

  const { id, name, images } = props.pokemon;

  const addToPokedex = () => {
    const newPokedex = [...pokedex, props.pokemon];

    const orderedPokedex = newPokedex.sort((a, b) => {
      return a.id - b.id;
    });
    setPokedex(orderedPokedex);
  };

  const removeFromPokedex = () => {
    const newPokedex = pokedex.filter((poke) => {
      return id !== poke.id;
    });
    setPokedex(newPokedex);
  };

  return (
    <PokeCardStyle>
      <span className="id-card">#{id}</span>

      <figure>
        <img
          id="img-pokecard"
          src={images.front}
          alt={`Foto frontal de ${name}`}
        />
      </figure>

      <p className="nome-pokemon">{name.toUpperCase()}</p>

      <nav className="botoes-container">
        {props.actualPage === "pokelist" ? (
          <button onClick={addToPokedex}>ADD À POKEDEX</button>
        ) : (
          <button onClick={removeFromPokedex}>REMOVER</button>
        )}
        <button onClick={() => navigateToPokeDetailsPage(navigate, name)}>
          DETALHES
        </button>
      </nav>
    </PokeCardStyle>
  );
}

export default PokeCard;