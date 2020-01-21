import React, { useState } from "react";
import PackageContext from './appContext';

export const Provider = ({ children }) => {
    const [state, setState] = useState({
        isAppLoading: false,
        user: {}
    });

    return (
        <PackageContext.Provider
            value={{
                data: state,
                toggleAppLoading: (isAppLoading) => {
                    setState({ ...state, isAppLoading });
                },
                onUserloged: (user) => {
                    setState({ ...state, user });
                }
            }}
        >
            {children}
        </PackageContext.Provider>
    );
};