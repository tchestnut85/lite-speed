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
        <div className="overlay">
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
            <div>
                {/* <p className="hero-text">Learning is the greatest pathway to your next career.</p>  */}
                <p className="hero-text">Learn. Achieve. Connect. </p> 
                <p className="hero-subtext">An educational platform that helps you get a leg up on the competition in the speed of light!</p>
            </div>
        </div>
    </div>
    );
  }

  export default LandingPage;
