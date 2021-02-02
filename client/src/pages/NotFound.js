import { Link } from 'react-router-dom';
import React from "react";

const NotFound = () => {

  return (
    <div className='notfound-image'>
      <div className="notfound-overlay">
        <div className='landing-nav'>
           <Link to="/" className="landing-nav-title">
            <h1>Warp <i>Speed</i></h1>
          </Link>

          {/* <nav className='landing-navbar'>
            <>
              <Link to='/login' className='landing-list-item'>Login</Link>
              <Link to='/signup' className='landing-list-item'>Signup</Link>
            </> */}
          {/* </nav> */}
        </div>
      </div>
    </div>
  );
};

export default NotFound;