import React from "react";
import AnimatedLoader from '../shared/AnimatedLoader/AnimatedLoader';
import './LoadingScreen.css';

const LoadingScreen = props => {

    return (
        <div className="loading-overlay">
            <div>
                <AnimatedLoader />
                <p>Chargement en cours...</p>
            </div>
        </div>
    );
};

export { LoadingScreen };