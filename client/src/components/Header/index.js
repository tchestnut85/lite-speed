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
            <div className='nav-wrap'>
                <Link to="/" className="nav-title">
                <h1>Warp <i>Speed</i></h1>
                </Link>
            <nav className='navbar'>
                {Auth.loggedIn() ? (
                    <>
                        <Link to='/course' className='list-item'>Courses</Link>
                        <Link to='/profile' className='list-item'>Profile</Link>
                        <a href='/' onClick={logout} className='list-item'>Logout</a>
                    </>
                ) : (
                        <>
                        <Link to='/login' className='list-item'>Login</Link>
                        <Link to='/signup' className='list-item'>Signup</Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
}
export default Header;