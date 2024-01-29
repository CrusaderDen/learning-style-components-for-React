import React from 'react';
import {Card} from "./components/Card";
import styled from "styled-components";


function App() {
    return (
        <CardsBox className="App">
            <Card/>
            <Card/>
            <Card/>
        </CardsBox>
    );
}

export default App;

const CardsBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    justify-content: center;
    align-items: center;
    gap: 50px;
`





