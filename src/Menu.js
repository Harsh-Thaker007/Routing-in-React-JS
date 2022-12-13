import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {

    return (
        <>
          <section className="navbar-bg">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand"><NavLink exact to="/"> Home </NavLink></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>

                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            
                            <li className="nav-item">
                                <a className="nav-link"><NavLink exact to="/About"> About US </NavLink>  </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><NavLink exact to="/Contact"> Contact US </NavLink></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><NavLink exact to="/Demo"> Demo </NavLink> </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><NavLink exact to="/User"> User </NavLink> </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><NavLink exact to="/Info"> Info </NavLink> </a>
                            </li>
                        </ul>
                        <button className="btn btn-style" type="submit">sign-in</button>
                            <button className="btn btn-style" type="submit">login</button>
                    </div>
                </div>
            </nav>
            </section>

        </>
    );
}

export default Menu; 