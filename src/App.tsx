import React from 'react';
import styled from "styled-components";
import {StyledBtn, SuperButton} from "./components/Button.styled";
import {Link} from "./components/Link.styled";


function App() {
    return (
        <div className="App">
            <Box>
                <StyledBtn color={'red'}>Hello</StyledBtn>
                <StyledBtn>Hello</StyledBtn>
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
    gap: 20px;

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
