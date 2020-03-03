import React from 'react';
import {NavLink} from 'react-router-dom';

const activeStyle = {
    textDecoration: 'underline'
};

export default function Nav() {
    return (

        <nav className='row mt-2'>
            <ul className='row nav'>
                <li>
                    <NavLink
                        to='/'
                        exact
                        activeStyle={activeStyle}
                        className='nav-link font-weight-bolder text-warning'>
                        Random Joke
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/search-joke'
                        activeStyle={activeStyle}
                        className='nav-link font-weight-bolder text-warning'>
                        Search Joke
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/never-ending-jokes'
                        activeStyle={activeStyle}
                        className='nav-link font-weight-bolder text-warning'>
                        Never-ending Jokes
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
