import React from 'react';
import {NavLink} from 'react-router-dom';

const activeStyle = {
    color: 'rgb(187, 46, 31)'
};

export default function Nav() {
    return (

        <nav className='row'>
            <ul className='row nav'>
                <li>
                    <NavLink
                        to='/'
                        exact
                        activeStyle={activeStyle}
                        className='nav-link'>
                        Random Joke
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/search-joke'
                        activeStyle={activeStyle}
                        className='nav-link'>
                        Search Joke
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/never-ending-jokes'
                        activeStyle={activeStyle}
                        className='nav-link'>
                        Never-ending Jokes
                    </NavLink>
                </li>
            </ul>
        </nav>

    );
}
