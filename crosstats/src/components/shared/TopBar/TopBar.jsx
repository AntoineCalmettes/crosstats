import React from 'react';

export const TopBar = (props) => {
    const TITLE = props.title;
    const ACTION_BUTTON = props.button;

    function _renderBtn() {
        if (ACTION_BUTTON) {
            return (
                <div className="col-md-6 d-none d-md-block">
                    <div className="d-flex justify-content-end">
                        {ACTION_BUTTON}
                    </div>
                </div>
            )
        }
        else return
    }

    return (
        <div className="row mb-32">
            <div className="col-md-6">
                <h1 className="title h2">{TITLE}</h1>
            </div>
            {_renderBtn()}
        </div>
    );
}