import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar">
            <div className="navbar-title">
                <Link to="/">
                    <h1>
                        Skyline Boat Club
                    </h1>
                </Link>
            </div>
            <div className="navbar-buttons">
                <Link to="/LoginPage" className="navbar-button">
                    <h1>
                        Login
                    </h1>
                </Link>
                <Link to="RegistrationPage" className="navbar-button">
                    <h1>
                        Sign Up
                    </h1>
                </Link>
            </div>
        </div>
    );
};

export default Header;