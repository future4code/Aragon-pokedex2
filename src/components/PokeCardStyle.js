import styled from "styled-components";

const PokeCardStyle = styled.section`
  border-radius: 10px;
  box-shadow: 0 0 5px 0 grey;
  text-align: center;
  background-color: white;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
 
.id-card {
    display: flex;
    flex-direction: row;
    justify-content: start;
    width: 22px;
    background-color: green;
    color: white;
    border-radius: 5px 0 5px 0
    }

#img-pokecard {
    width: 50%;
}

.nome-pokemon {
    color: darkblue;
    text-shadow: 0 0 10px 0 black;
    font-size: 1.5rem;
    margin-bottom: 10px
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
    height: 5vh;
    width: 9vw;
    border-radius: 10px;
    border: none;
    color: darkblue;
    box-shadow: 0 0 10px 0 green
}
`

export default PokeCardStyle