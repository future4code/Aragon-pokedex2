import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import Header from "../components/Header"
import { GlobalContext } from "../global/GlobalState"

export function PokeDetailsPage() {

    const params = useParams();

    const context = useContext(GlobalContext);

    const { pokemons } = context.states;

    const { getPokemons } = context.getters;

    useEffect(() => {
      getPokeDetails(params.pokeName)
    },[])

    const pokeDetail = pokemons.name ? (
      <>
        <figure>
          <h2>{pokemons.name.toUpperCase()}</h2>
          <img src={pokemons.images.front} alt={`${pokemons.name} de frente`} />
          <img src={pokemons.images.back} alt={`${pokemons.name} de costas`} />
        </figure>

        <section>
          <h2>Status: </h2>
          {pokemons.status.map((stat) => {
            return (
              <div key={stat["status_name"]}>
                <span>{stat["status_name"].toUpperCase()}</span>
                <span>{stat.value}</span>
                <br />
              </div>
            )
          })}
        </section>
        
        <section>
          <h2>Tipos: </h2>
          {pokemons.types.map((type) => {
            return (
              <li key={type}>{type}</li>
            )
          })}
        </section>

        <section>
          <h2>Habilidades: </h2>
          {pokemons.abilities.filter((ability, index) => {
            if(index < 5) {
              return ability
            }
            }).map((ability) => {
              return (
                <li key={ability}>{ability}</li>
              )
            })
          }
        </section>
      </>
    ) : <p>Carregando...</p>

    return (
      <>
        <Header actualPage={"pokedetails"} />
        <hr />
        <main>
            <h1>PokeInfos</h1>
            {pokeDetail}
        </main>
      </>
    )
  }

  export default PokeDetailsPage
