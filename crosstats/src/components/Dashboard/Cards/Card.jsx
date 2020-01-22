import React from "react";
import './Card.css';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

export const Card = ({ component, style }) => {
    const fadeInAnimation = keyframes`${fadeIn}`;

    const FadeInDiv = styled.div`
      animation: 2s ${fadeInAnimation} ;
    `;

    return (
        < FadeInDiv style={style} className="card bg-primary">
            {component}
        </ FadeInDiv>
    );
};