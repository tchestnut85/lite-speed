import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import React from 'react';

function Header() {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <header>
            <div className='nav-wrap flex-row'>
                {Auth.loggedIn() ? (
                    <Link to="/dashboard" className="nav-title">
                        <h1>Lite <i>Speed</i></h1>
                    </Link>
                ) : (
                        <Link to="/" className="nav-title">
                            <h1>Lite <i>Speed</i></h1>
                        </Link>
                    )}
                < nav className='navbar flex-row'>
                    {
                        <>
                            <Link to='/courses' className='list-item'>Courses</Link>
                            <Link to='/profile' className='list-item'>Profile</Link>
                            <Link to='/dashboard' className='list-item'>Dashboard</Link>
                            <Link to='/logout' className='list-item' onClick={logout}>Logout</Link>
                        </>
                    }
                </nav>
            </div>
        </header >
    );
}

export default Header;