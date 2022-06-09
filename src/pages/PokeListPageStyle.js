import styled from "styled-components";

const PokeListPageStyle = styled.section`
  background-color: firebrick;
  width: 100%;
  height: 100%;

  .container-cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    margin: 20px;
  }

  .container-loading {
    grid-column: 2/4;
    margin-top: 40px;
  }

  #loading-img {
    margin: auto;
    border: 10px solid lightgray;
    border-radius: 50%;
    border-top: 10px solid lightgray;
    border-right: 10px solid red;
    border-bottom: 10px solid red;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  footer {
    background-color: firebrick;
    text-align: center;
    height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end; 
    padding-bottom: 20px;
    height: 100vh ;
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

  .container-nvg {
      color: lightcyan;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 10px
  }

  .container-nvg button {
      background-color: #ffcc03;
      color: dodgerblue;
      border: none;
      border-radius: 9px;
      width: 3vw;
      height: 5vh;
      font-size: 100%;
         &:hover {
            box-shadow: 2px 2px 2px 0 black;
            border: 2px solid dodgerblue
      }
  }

`

export default PokeListPageStyle;
