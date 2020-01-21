import React from "react";
import './Card.css';

export const Card = ({ component, style }) => {

    return (
        <div style={style} className="card bg-primary">
            {component}
        </div>
    );
};