import styled from "styled-components";

const PokedexPageStyle = styled.main`
  background-color: firebrick;
  width: 100%;
  height: 100%;

  header {
    background-color: firebrick;
    height: 44vh;
  }

  .grid-pokedex {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    margin: 20px;
  }

  footer {
    background-color: firebrick;
    text-align: center;
    height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end; 
    padding-bottom: 30px;
    height: 100vh;
  }

  .topo {
    padding: 10px;
    text-decoration-line: none;
    margin-top: 5vh;
    background-color: firebrick;
    color: #ffcc03;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 80%;
    width: 12vw;
    height: 7vh;
    border: 1px solid white;

        &:hover {
      border: 2px solid white;
      border-radius: 10px;
    }
}

.gif-pokeball {
    width: 40vw;
    border-radius: 10px;
  }
`;
export default PokedexPageStyle;
