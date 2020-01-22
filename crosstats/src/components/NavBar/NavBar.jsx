import React from 'react';
import './NavBar.css';
import IconButton from '@material-ui/core/IconButton';
import InsertChartRoundedIcon from '@material-ui/icons/InsertChartRounded';
import FitnessCenterRoundedIcon from '@material-ui/icons/FitnessCenterRounded';
import SettingsIcon from '@material-ui/icons/Settings';
import { Divider } from '@material-ui/core';
import { Link } from "react-router-dom";

function NavBar() {

    return (
        <div className="navbar-side bg-primary d-flex justify-content-center">
            <div>
                <h3 className="title p-32">C</h3>
                <Divider></Divider>
                <ul class="navbar-nav" style={{ paddingTop: 16 }}>
                    <li class="nav-item active text-center">
                        <Link to="/app/dashboard"><IconButton className="nav-btn" title="Tableau de bord" aria-label="Tableau de bord">
                            <InsertChartRoundedIcon fontSize={'default'} />
                        </IconButton></Link>
                    </li>
                    <li class="nav-item text-center">
                        <Link to="/app/wod"><IconButton className="nav-btn" title="Wod" aria-label="Wod">
                            <FitnessCenterRoundedIcon fontSize={'default'} />
                        </IconButton></Link>
                    </li>
                    <li class="nav-item text-center">
                        <Link to="/app/settings"><IconButton className="nav-btn" title="Paramètres" aria-label="Paramètres">
                            <SettingsIcon fontSize={'default'} />
                        </IconButton></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export { NavBar };