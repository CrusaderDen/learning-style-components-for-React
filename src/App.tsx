import React from 'react';
import styled from "styled-components";
import {StyledBtn} from "./components/Button.styled";
import {Link} from "./components/Link.styled";


function App() {
    return (
        <div className="App">
            <Box>
                <StyledBtn outlined color={'green'} fontSize={'30px'}>Лайк</StyledBtn>
                <StyledBtn primary>Коммент</StyledBtn>
                <StyledBtn outlined color={'blue'} fontSize={'30px'}>Подписка</StyledBtn>
            </Box>
        </div>
    );
}

export default App;


const Box = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    gap: 50px;

    button {
        cursor: pointer;
    }

    ${Link} {
        cursor: zoom-in;
    }

    @media screen and (max-width: 800px) {
        flex-direction: column;

    }
`
