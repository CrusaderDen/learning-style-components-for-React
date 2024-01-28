import styled from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

export const StyledBtn = styled.button`
    border: none;
    background-color: ${props => props.color || '#fb3f78'};
    //background-color: #fb3f78;
    padding: 10px 20px;
    color: snow;
    font-size: 2rem;
    font-weight: 700;

    &:hover {
        background-color: #3577ad;
    }

`
export const SuperButton = styled(StyledBtn)`
    border-radius: 5px;
    background-color: #ffe869;
    color: #363636;

    &:hover {
        animation: ${MyAnimation} 3s ease-in-out infinite;
    }
`