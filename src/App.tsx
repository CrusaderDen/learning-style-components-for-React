import React from 'react';
import styled from "styled-components";
import {StyledBtn} from "./components/Button.styled";
import {Link} from "./components/Link.styled";


function App() {
    return (
        <div className="App">
            <Box>
                {/*<StyledBtn color={'red'} fontSize={"40px"}>Hello</StyledBtn>*/}
                {/*<StyledBtn color={'green'} fontSize={"60px"}>Hello</StyledBtn>*/}
                {/*<StyledBtn>MicroHello</StyledBtn>*/}
                <StyledBtn outlined color={'green'}>MicroHello</StyledBtn>
                <StyledBtn primary>MicroHello</StyledBtn>
                <StyledBtn outlined color={'blue'}>MicroHello</StyledBtn>
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
