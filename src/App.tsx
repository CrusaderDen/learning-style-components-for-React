import React from 'react';
import styled from "styled-components";


function App() {
    return (
        <div className="App">
            <Box>
                <StyledBtn as={Link} href={'#'}>LinkComponent</StyledBtn>
                <StyledBtn as={'a'} href={'#'}>Link</StyledBtn>
                <StyledBtn>Hello</StyledBtn>
                <SuperButton>SuperButton</SuperButton>
            </Box>
        </div>
    );
}

export default App;

const StyledBtn = styled.button`
    border: none;
    background-color: #fb3f78;
    padding: 10px 20px;
    color: snow;
    font-size: 2rem;
    font-weight: 700;

    &:hover {
        background-color: #3577ad;
    }

    &:last-child {
        background-color: #9ce550;
    }

`
const Link = styled.a`
    color: #4983c3;
    font-size: 2rem;
    font-weight: 700;
    background-color: transparent;
    padding: 0;
`


const SuperButton = styled(StyledBtn)`
    border-radius: 5px;
    background-color: #ffe869;
    color: #363636;
`


const Box = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
