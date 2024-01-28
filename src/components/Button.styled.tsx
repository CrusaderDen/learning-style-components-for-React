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
    padding: 20px 20px;
    min-width: 200px;
    color: snow;
    font-size: ${props => props.fontSize || '2rem'};
    font-weight: 700;
    transition: 0.5s all;

    &:hover {
        transform: scale(1.2);
    }

    ${props => props.outlined && css<StyledBtnPropsType>`
        border: 2px solid ${props => props.color || '#fb3f78'};
        color: ${props => props.color || '#fb3f78'};
        background-color: transparent;

        &:hover {
            border-color: #ab9318;
            color: yellow;
            background-color: transparent;
        }
    `}

    ${props => props.primary && css<StyledBtnPropsType>`
        background-color: ${props => props.color || '#fb3f78'};
        color: snow;
    `}

`
