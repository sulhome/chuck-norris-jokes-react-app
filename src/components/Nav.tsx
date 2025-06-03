import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle: React.CSSProperties = {
    textDecoration: 'underline'
};

const Nav: React.FC = () => {
    return (
        <nav className="mt-3">
            <ul className="nav justify-content-start">
                <li className="nav-item">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `nav-link fw-bold text-warning${isActive ? ' active' : ''}`
                        }
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}
                    >
                        Random Joke
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/never-ending-jokes"
                        className={({ isActive }) =>
                            `nav-link fw-bold text-warning${isActive ? ' active' : ''}`
                        }
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}
                    >
                        Never-ending Jokes
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
