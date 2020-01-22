import React from "react";
import AnimatedNotFound from '../shared/AnimatedNotFound/AnimatedNotFound';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const NotFound = props => {
    return (
        <div className="app-container p-32 d-flex align-items-center flex-column justify-content-center" style={{ height: '100vh' }}>
            <AnimatedNotFound />
            <h1 className="mt-4 text-center h4">Oops! désolé page introuvable</h1>
            <Link to="/app/dashboard"><Button className="mt-4" variant="outlined">tableau de bord</Button></Link>
        </div>
    );
};

export { NotFound };