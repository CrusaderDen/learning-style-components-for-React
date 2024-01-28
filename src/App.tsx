import React from 'react';
import styled from "styled-components";
import {StyledBtn} from "./Components/Button.styled";


function App() {
    return (
        <div className="App">
            <Menu>
                <ul>
                    <li><a href="#">Menu item 1</a></li>
                    <li><a href="#">Menu item 2</a></li>
                    <li><a href="#">Menu item 3</a></li>
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

    button {
        cursor: pointer;
    }

    ${Link} {
        cursor: zoom-in;
    }
`
const Menu = styled.nav`
    ul {
        list-style: none;
        padding: 0;
        display: flex;

        li > a {
            color: red;
        }

        li + li {
            margin-left: 20px;
        }
    }
`