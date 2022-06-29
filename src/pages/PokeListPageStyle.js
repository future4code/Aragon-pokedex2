import styled from "styled-components";

const PokeListPageStyle = styled.section`
  background-color: firebrick;

  .container-cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
    margin: 10px;
  }

  .ball {
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
    height: 20vh;
  }

  #top-btn {
    margin-top: 20px;
    background-color: firebrick;
    color: #ffcc03;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    font-size: 80%;
    width: 10vw;
    height: 7vh;
    border: 1px solid white;

    &:hover::after {
      border: 2px solid white;
      border-radius: 10px;
      transition: margin-top 250ms;
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
  }
`

export default PokeListPageStyle;
