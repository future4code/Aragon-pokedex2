import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GlobalStateContext from "../global/GlobalStateContext";
import { navigateToPreviousPage } from "../routes/coordinator";
import PokeDetailsPageStyle from "./PokeDetailsPageStyle";

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
      <button onClick={() => navigateToPreviousPage(navigate)}>Voltar</button>

      <section className="card-image">
        <figure>
          <img src={pokemon.images.front} alt={`${pokemon.name} de frente`} />
          <img src={pokemon.images.back} alt={`${pokemon.name} de costas`} />
          <h2>{pokemon.name.toUpperCase()}</h2>
        </figure>
      </section>

      <section>
        <h2>Status: </h2>
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
        <h2>Habilidades: </h2>
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
        <h2>Tipos: </h2>
        {pokemon.types.map((type) => {
          return <li key={type}>{type}</li>;
        })}
      </section>
    </main>
  ) : (
    <p>Carregando...</p>
  );

  return (
    <PokeDetailsPageStyle>
      <main>
        {pokeDetail}
      </main>
    </PokeDetailsPageStyle>
  );
}

export default PokeDetailsPage;
