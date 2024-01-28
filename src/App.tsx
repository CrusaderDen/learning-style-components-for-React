import React from 'react';
import styled from "styled-components";


function App() {
    return (
        <div className="App">
            <Box>
                <StyledBtn as={'a'} href={'#'}>Link</StyledBtn>;
                <StyledBtn>Hello</StyledBtn>;
                <SuperButton>SuperButton</SuperButton>;
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
`
