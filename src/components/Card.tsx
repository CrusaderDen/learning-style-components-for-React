import desert from "../assets/desert.png";
import React from "react";
import {CardBtn, CardStyles, CardTitle} from "./Card.styled";


export function Card(props: any) {
    return (

        <CardStyles>
            <img src={props.imgSource} alt="desert"/>
            <CardTitle titleType={'strong'}>{props.titleText}</CardTitle>
            <p>{props.mainText}</p>
            <div>
                <CardBtn primary>See more</CardBtn>
                <CardBtn outlined>Save</CardBtn>
            </div>
        </CardStyles>
    )
}
