import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({ component: Component, isPrivate, ...rest }) {
    // Constante en attendant de faire le système d'authentification
    const signed = false;

    /**    
    * Redirige l'utilisateur vers la route /SignIn si n'est pas authentifier 
    */
    if (isPrivate && !signed) {
        return <Redirect to="/" />;
    }

    /**    
    * Redirige l'utilisateur vers la route /Home si est authentifier  
    */
    if (!isPrivate && signed) {
        return <Redirect to="/dashboard" />;
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