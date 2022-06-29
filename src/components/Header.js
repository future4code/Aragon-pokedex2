import { useNavigate } from "react-router-dom";
import {
  navigateToPokedexPage,
  navigateToPokeListPage,
  navigateToPreviousPage,
} from "../routes/coordinator";
import HeaderStyle from "./HeaderStyle";
import img from "../assets/logo.png";
import logo from "../assets/pokedex.png";

function Header(props) {
  const navigate = useNavigate();

  const renderHeader = () => {
    switch (props.actualPage) {
      case "pokelist":
        return (
          <>
            <figure>
              <img src={img} alt="Pokemon logo" />
            </figure>
            <nav>
              <button className="botao-pokedex" onClick={() => navigateToPokedexPage(navigate)}>
                Pokedex
              </button>
            </nav>
          </>
        );
      case "pokedex":
        return (
          <>
            <figure>
              <img src={logo} alt="pokedex logo" />
            </figure>
            <nav>
              <button onClick={() => navigateToPokeListPage(navigate)}>
                Voltar
              </button>
            </nav>
          </>
        );
      case "pokedetails":
        return (
          <>
            <nav>
              <button onClick={() => navigateToPreviousPage(navigate)}>
                Voltar
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
