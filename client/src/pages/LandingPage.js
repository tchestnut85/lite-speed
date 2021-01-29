import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import React from 'react';

function LandingPage() {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };
    
    return (
    <div className='big-image'>
        <div className='landing-nav'>
            <Link to="/" className="landing-nav-title">
            <h1>Warp <i>Speed</i></h1>
            </Link>
            
            <nav className='landing-navbar'>
                {Auth.loggedIn() ? (
                <>
                    <Link to='/course' className='landing-list-item'>Courses</Link>
                    <Link to='/profile' className='landing-list-item'>Profile</Link>
                    <a href='/' onClick={logout} className='landing-list-item'>Logout</a>
                </>
            ) : (
                    <>
                    <Link to='/login' className='landing-list-item'>Login</Link>
                    <Link to='/signup' className='landing-list-item'>Signup</Link>
                    </>
                )}
            </nav>
        </div>
        <div className="hero-text">
            Education can be the pathway to your next great step. 
            Let us help open up the door for you to get a leg up on the competition in Warp Speed!
        </div>
    </div>
    );
  }

  export default LandingPage;
