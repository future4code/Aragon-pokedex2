import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { navigateToPokeDetailsPage } from "../routes/coordinator";
import GlobalStateContext from "../global/GlobalStateContext";

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

  return (
    <section>
      <span>{name.toUpperCase()} - </span>
      <span>N°: {id}</span>
      <figure>
        <img src={images.front} alt={`Foto frontal de ${name}`} />
      </figure>
      <br />
      <br />
      {props.actualPage === "pokelist" ? 
        <button onClick={addToPokedex}>Adicionar a Pokedex</button>
       : <button>Remover da Pokedex</button>
      }
      <button onClick={() => navigateToPokeDetailsPage(navigate, name)}>
        Ver detalhes
      </button>
      <br />
      <br />
      <hr />
    </section>
  );
}

export default PokeCard;