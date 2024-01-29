import desert from "../assets/desert.png";
import React from "react";
import styled from "styled-components";
import {CardBtn, CardStyles, CardTitle} from "./Card.styled";


export function Card() {
    return (

        <CardStyles>
            <img src={desert} alt="desert"/>
            <CardTitle titleType={'strong'}>Headline</CardTitle>
            <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
            <div>
                <CardBtn primary>See more</CardBtn>
                <CardBtn outlined>Save</CardBtn>
            </div>
        </CardStyles>
    )
}
