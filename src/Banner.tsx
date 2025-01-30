import React from 'react';
import Logo1 from '../public/greeneservicesdryice.png';
import Logo2 from '../public/scp.png';
import {Link, useLocation} from 'react-router-dom';

const Banner = React.memo(() => {

    const location = useLocation();

    const logoSrc = location.pathname === "/greene-services"
        ? Logo1
        : Logo2;

    return (
        <div className="banner">
            <img className="logo" src={logoSrc} alt="GreeneServices Logo" />
            <div className="button-group">
                <Link to="/" className="nav-item">
                    HOME
                </Link>
                <div className="nav-item dropdown">
                    <span>SERVICES</span>
                    <div className="dropdown-content">
                        <Link to="/silo-cleaning">Silo Cleaning</Link>
                        <Link to="/silo-inspection">Silo Inspection</Link>
                        <Link to="/plastic">Plastic & Mold Injection</Link>
                    </div>
                </div>
                <Link to="/about" className="nav-item">
                    ABOUT
                </Link>
                <Link to="/quote" className="nav-item">
                    REQUEST A QUOTE
                </Link>
                <button className="contact-button">Contact Us</button>
            </div>
        </div>
    );

});

export default Banner;
