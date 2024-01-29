import React from 'react';
import styled from "styled-components";
import {StyledBtn} from "./components/Button.styled";
import {Link} from "./components/Link.styled";
import {myTheme} from "./styles/Theme.styled";


function App() {
    return (
        <div className="App">
            <Box>
                <StyledBtn btnType={'outlined'} color={myTheme.colors.primary} fontSize={'30px'}>Лайк</StyledBtn>
                <StyledBtn btnType={'primary'} active>Коммент</StyledBtn>
                <StyledBtn btnType={'outlined'} color={myTheme.colors.secondary} fontSize={'30px'}>Лайк</StyledBtn>
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

    @media ${myTheme.media.tablet} {
        flex-direction: column;

    }
`
