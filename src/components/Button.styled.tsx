import styled, {css} from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    primary?: boolean
    outlined?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
    border: none;
    background-color: ${props => props.color || '#fb3f78'};
    border-radius: 15px;
    padding: 10px 20px;
    color: snow;
    font-size: ${props => props.fontSize};
    font-weight: 700;

    &:hover {
        background-color: #3577ad;
        animation: ${MyAnimation} 3s ease-in-out infinite;;
    }

    ${props => props.outlined && css<StyledBtnPropsType>`
        border: 2px solid ${props => props.color || '#fb3f78'};
        color: ${props => props.color || '#fb3f78'};
        background-color: transparent;
    `}

    ${props => props.primary && css<StyledBtnPropsType>`
        background-color: ${props => props.color || '#fb3f78'};
        color: snow;
    `}



`
export const SuperButton = styled(StyledBtn)`
    background-color: #ffe869;
    color: #363636;

    &:hover {
        animation: ${MyAnimation} 3s ease-in-out infinite;
    }
`