import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import React from "react";

const NotFound = () => {

  return (
    <div className='notfound-image'>
      <div className='landing-nav'>

        {!Auth.loggedIn() ? (
          <Link to="/" className="landing-nav-title">
            <h1>Warp <i>Speed</i></h1>
          </Link>
        ) : (
            <>
            </>
          )}

      </div>
    </div>
  );
};

export default NotFound;