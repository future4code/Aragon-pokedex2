import styled from "styled-components";

const HeaderStyle = styled.section`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-align: center;
  height: 42vh;

  img {
    margin: 1em;
    width: 25%;
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
