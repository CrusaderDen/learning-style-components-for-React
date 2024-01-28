import React from 'react';
import styled from "styled-components";
import {StyledBtn, SuperButton} from "./components/Button.styled";
import {Link} from "./components/Link.styled";
import {Menu} from "./components/Menu.styled";


function App() {
    return (
        <div className="App">
            <Menu>
                <ul>
                    <li><a href="https://mail.ru/" about={'_blank'}>Menu item 1</a></li>
                    <li><a href="ya.ru">Menu item 2</a></li>
                    <li><a href="mail.ru">Menu item 3</a></li>
                </ul>
            </Menu>
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
