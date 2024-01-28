import styled, {css} from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    btnType?: 'primary' | 'outlined'
    active?: boolean
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

    ${props => props.btnType === 'outlined' && css<StyledBtnPropsType>`
        border: 2px solid ${props => props.color || '#fb3f78'};
        color: ${props => props.color || '#fb3f78'};
        background-color: transparent;

        &:hover {
            border-color: #ab9318;
            color: yellow;
            background-color: transparent;
        }
    `}

    ${props => props.btnType === 'primary' && css<StyledBtnPropsType>`
        background-color: ${props => props.color || '#fb3f78'};
        color: snow;
    `}

    ${props => props.active && css<StyledBtnPropsType>`
        box-shadow: 0px 0px 5px 5px rgba(152, 139, 139, 0.51);

        &:hover {
            box-shadow: 0px 0px 10px 15px rgba(152, 139, 139, 0.51);
        }
    `}

`