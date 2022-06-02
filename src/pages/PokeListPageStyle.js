import styled from 'styled-components'

const PokeListPageStyle = styled.section`

    background-color: lightblue;

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
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    }


    `



export default PokeListPageStyle