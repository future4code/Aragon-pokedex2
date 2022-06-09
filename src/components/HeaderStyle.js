import styled from "styled-components";

const HeaderStyle = styled.section`
  text-align: center;
  height: 44vh;

  .logo-pokemon {
    margin: 1em;
    width: 30%;
  }

  .gif-pikachu {
    width: 5vw;
  }

  .pokedex-logo {
    margin: 2em;
    width: 40%;
  }

  .pokedex-gif {
      width: 5vw;
      border-radius: 20px; 
  }

  .botao-pokedex {
    background-color: firebrick;
    color: #ffcc03;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    font-size: 100%;
    width: 10vw;
    height: 7vh;
    border: 1px solid white;

    &:hover {
      border: 2px solid white;
      border-radius: 10px;
    }
  }
`;

export default HeaderStyle;
