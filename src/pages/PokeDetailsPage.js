import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GlobalStateContext from "../global/GlobalStateContext";
import { navigateToPreviousPage } from "../routes/coordinator";
import PokeDetailsPageStyle from "./PokeDetailsPageStyle";
import gif from "../assets/pikachu.gif";

export function PokeDetailsPage() {
  const params = useParams();

  const navigate = useNavigate();

  const { states, getters } = useContext(GlobalStateContext);

  const { pokemon } = states;

  const { getPokeDetails } = getters;

  useEffect(() => {
    getPokeDetails(params.pokeName);
  }, []);

  const pokeDetail = pokemon.name ? (
    <main className="container-details">
      <section className="card-image">
        <figure>
          <img src={pokemon.images.front} alt={`${pokemon.name} de frente`} />
          <img src={pokemon.images.back} alt={`${pokemon.name} de costas`} />
          <h2 className="pokename-details">{pokemon.name.toUpperCase()}</h2>
        </figure>
      </section>

      <section>
        <h2>STATUS: </h2>
        {pokemon.status.map((stat) => {
          return (
            <div key={stat["status_name"]}>
              <span>{stat["status_name"].toUpperCase()}</span>
              <span>{stat.value}</span>
              <br />
            </div>
          );
        })}
      </section>

      <section className="card-abilities">
        <h2>HABILIDADES: </h2>
        {pokemon.abilities
          .filter((ability, index) => {
            if (index < 5) {
              return ability;
            }
          })
          .map((ability) => {
            return <li key={ability}>{ability}</li>;
          })}
      </section>

      <section className="card-type">
        <h2>TIPOS: </h2>
        {pokemon.types.map((type) => {
          return <li key={type}>{type}</li>;
        })}
      </section>
    </main>
  ) : (
    <p>Loading...</p>
  );

  return (
    <PokeDetailsPageStyle>
      <main>
        {pokeDetail}
        <button
          className="btn-return"
          onClick={() => navigateToPreviousPage(navigate)}
        >
          VOLTAR
        </button>
        <br />
        <br />
        <img
          className="gif-pikachu"
          src={gif}
          alt="gif do pikachu correndo"
        ></img>
      </main>
    </PokeDetailsPageStyle>
  );
}

export default PokeDetailsPage;
