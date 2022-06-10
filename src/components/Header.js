import { useNavigate } from "react-router-dom";
import {
  navigateToPokedexPage,
  navigateToPokeListPage,
  navigateToPreviousPage,
} from "../routes/coordinator";
import HeaderStyle from "./HeaderStyle";
import img from "../assets/logo.png";
import logo from "../assets/pokedex.png";
import gif from "../assets/pikachu-oi.gif";
import pokedex from "../assets/pokedex.gif"

function Header(props) {
  const navigate = useNavigate();

  const renderHeader = () => {
    switch (props.actualPage) {
      case "pokelist":
        return (
          <>
            <figure>
              <img
                className="gif-pikachu"
                src={gif}
                alt="gif do Pikachu dando oi"
              />
              <img className="logo-pokemon" 
              src={img} 
              alt="Pokemon logo" 
              />
              <img
                className="gif-pikachu"
                src={gif}
                alt="gif do Pikachu dando oi"
              />
            </figure>
            <nav>
              <button
                className="botao-pokedex"
                onClick={() => navigateToPokedexPage(navigate)}
              >
                POKEDEX
              </button>
            </nav>
          </>
        );
      case "pokedex":
        return (
          <>
            <figure>
              <img
                className="pokedex-gif"
                src={pokedex}
                alt="gif de um pokedex"
              />
              <img 
              className="pokedex-logo" 
              src={logo} 
              alt="pokedex logo" 
              />
              <img
                className="pokedex-gif"
                src={pokedex}
                alt="gif de um pokedex"
              />
            </figure>
            <nav>
              <button
                className="botao-pokedex"
                onClick={() => navigateToPokeListPage(navigate)}
              >
                VOLTAR
              </button>
            </nav>
          </>
        );
      case "pokedetails":
        return (
          <>
            <nav>
              <button
                className="botao-pokedex"
                onClick={() => navigateToPreviousPage(navigate)}
              >
                VOLTAR
              </button>
            </nav>
          </>
        );
      default:
        return;
    }
  };

  return (
    <HeaderStyle>
      <header>{renderHeader()}</header>
    </HeaderStyle>
  );
}

export default Header;
