import React from "react";
import './Card.css';
import { FadeInDiv } from '../../shared/Keyframes/FadeIn';

export const Card = ({ component, style }) => {
    return (
        < FadeInDiv style={style} className="card p-32 bg-primary">
            {component}
        </ FadeInDiv>
    );
};