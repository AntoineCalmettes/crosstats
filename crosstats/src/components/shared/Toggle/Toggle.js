import React from 'react'
import { func, string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const Toggle = ({ theme, toggleTheme }) => {
    // A utiliser plus tard
    const isLight = theme === 'light';

    return (
        <button className="btn btn-primary" onClick={toggleTheme} >
            <FontAwesomeIcon icon={isLight ? faMoon : faSun} />
        </button>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;