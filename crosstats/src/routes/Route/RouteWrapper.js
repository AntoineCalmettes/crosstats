import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import AppContext from "../../services/App/appContext";

export default function RouteWrapper({ component: Component, isPrivate, ...rest }) {
    const { data } = useContext(AppContext);
    // Constante en attendant de faire le système d'authentification
    const signed = data.user;
    /**    
    * Redirige l'utilisateur vers la route / si n'est pas authentifier 
    */
    if (isPrivate && !signed) {
        return <Redirect to="/" />;
    }

    /**    
    * Redirige l'utilisateur vers la route /app si est authentifier  
    */
    if (!isPrivate && signed) {
        return <Redirect to="/app/dashboard" />;
    }

    /**    
    *
    * Si match à aucune routes redirige vers le NotFound  
    */
    return <Route {...rest} component={Component} />;
}

// TYPAGE des props 
RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
};
RouteWrapper.defaultProps = {
    isPrivate: false,
};