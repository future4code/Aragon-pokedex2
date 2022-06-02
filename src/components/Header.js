import { useNavigate } from "react-router-dom";
import { navigateToPokedexPage, navigateToPokeListPage, navigateToPreviousPage } from "../routes/coordinator";
import HeaderStyle from './HeaderStyle'
import img from '../assets/logo.png'

function Header(props) {
  const navigate = useNavigate();

  const renderHeader = () => {
    switch (props.actualPage) {
      case "pokelist":
        return (
          <>
            <figure>
              <img src={img} alt="logo Pokemon"/>
            </figure>
            <nav>
              <button onClick={() => navigateToPokedexPage(navigate)}>
                Pokedex
              </button>
            </nav>
          </>
        )
        case "pokedex":
          return (
            <>
              <h1>Pokedex</h1>
              <nav>
                <button onClick={() => navigateToPokeListPage(navigate)} >Página Inicial</button>
              </nav>
            </>
          )
          case "pokedetails":
            return (
              <>
                <h1>Detalhes</h1>
                <nav>
                  <button onClick={() => navigateToPreviousPage(navigate)} >Voltar</button>
                </nav>
              </>
            )
            default:
              return
    }
  }

  return (
    <HeaderStyle>
      <header>
        {renderHeader()}
      </header>
    </HeaderStyle>
  )
}

export default Header;
