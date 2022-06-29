import styled from "styled-components";

const PokeDetailsPageStyle = styled.main`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-content: center;
height: 100vh;
background-color: blueviolet;
border: 3px solid black;

.container-details {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
    border: 1px solid black;
}

.card-image{
    text-align: center;
}

.card-info {
    list-style: none;
}
`

export default PokeDetailsPageStyle;