import styled from "styled-components";

const PokeDetailsPageStyle = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: firebrick;
  list-style: none;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;

  .gif-pikachu {
      width: 10vw;
      border-radius: 10px;
  }

  .container-details {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 40px;
    border: 1px solid black;
    background-color: snow;
    width: 80vw;
    gap: 10%;
    border-radius: 10px;
    box-shadow: black 5px 5px 5px 0;
  }

  .card-image {
    text-align: center;
    width: 30vw;
  }

  .card-image img {
      width: 50%;
  }

  .pokename-details {
    color: #ffcc03;
    text-shadow: 2px 1px #007ac1;
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 10px;
  }

  .card-info {
    list-style: none;
  }

  .btn-return {
    padding: 10px;
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
`;

export default PokeDetailsPageStyle;
