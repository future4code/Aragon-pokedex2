import styled from "styled-components";

const PokeCardStyle = styled.section`
  border-radius: 10px;
  box-shadow: black 5px 5px 5px 0;
  text-align: center;
  background-color: snow;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .id-card {
    padding: 3px;
    justify-content: start;
    width: 5vw;
    background-color: #007AC1;
    color: #ffcc03;
    border-radius: 10px 0 10px 0;
  }

  #img-pokecard {
    width: 50%;
  }

  .nome-pokemon {
    color: #ffcc03;
    text-shadow: 2px 1px #007AC1;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  .botoes-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 25px;
    padding-bottom: 10px;
    margin: auto;
  }

  button {
    height: 4.5vh;
    width: 8vw;
    border-radius: 7px;
    font-weight: bold;
    font-size: 60%;
    border: 1px solid steelblue;
    color: steelblue;
    cursor: pointer;
    &:hover {
      border: 1px solid steelblue;
      cursor: pointer;
      transition: 0.3s;
      transform: scale(1.1);
    }
  }
`;

export default PokeCardStyle;