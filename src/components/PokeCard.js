import { useNavigate } from "react-router-dom";
import { navigateToDetailsPage } from "../routes/coordinator";

function PokeCard(props) {

  const navigate = useNavigate()

  

  return (
    <section>
      <span>{props.pokemon.name.toUpperCase()} - </span>
      <span>N°: {props.pokemon.id}</span>
      <br />
      <br />
      <button>Adicionar a Pokedex</button>
      <button onClick={() => navigateToDetailsPage(navigate, props.pokemon.name)} >Ver detalhes</button>
      <br />
      <br />
      <hr />
    </section>
  );
};

export default PokeCard