import styled, {css} from "styled-components";

type CardBtnStyledProps = {
    primary?: boolean
    outlined?: boolean
}

type CardTitlePropsType = {
    titleType: string
}

export const CardTitle = styled.h1<CardTitlePropsType>`
    align-self: start;
    margin-left: 10px;
    ${props => props.titleType === 'strong' && css<CardTitlePropsType>`
        font-size: 16px;
        font-weight: 700;
    `}
`

export const CardBtn = styled.button<CardBtnStyledProps>`
    width: 86px;
    height: 30px;
    display: inline-block;
    border-radius: 5px;
    border: none;
    font-size: 10px;
    font-weight: 700;
    transition: 0.5s all;

    &:not(:last-child) {
        margin-right: 32px;
    }

    &:hover {
        transform: scale(1.05);
    }

    ${props => props.primary && css<CardBtnStyledProps>`
        background: #4E71FE;
        color: #fff;

        &:hover {
            background: #2140ce;
        }
    `}

    ${props => props.outlined && css<CardBtnStyledProps>`
        border: 2px solid #4E71FE;
        color: #4E71FE;
        background: #fff;

        &:hover {
            background: #eeeeee;
            border: 2px solid #2140ce;
        }
    `}


`

export const CardStyles = styled.div`
    max-width: 300px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 20px;
    align-items: center;
    border-radius: 15px;
    background: #FFF;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.10);

    p {
        color: #ABB3BA;
        font-size: 12px;
        font-weight: 500;
        line-height: 20px;
        margin-left: 10px;
        align-self: start;
    }

    img {
        height: 170px;
        width: 100%;
        object-fit: cover;
        object-position: top;
        border-radius: 10px;
        box-shadow: 0 0 2px black;
    }
`
