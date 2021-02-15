import { Link } from 'react-router-dom';
import React from 'react';

function Footer() {

    return (
        <footer>
            <div className='flex-row space-between'>
                <div>
                    <h2>Lite <i>Speed</i></h2>
                    <p>
                        Expand your knowledge and skill set at the speed of light
                    </p>
                </div>
                <Link to="/about" className="about-title">
                    <button>About the Team</button>
                </Link>
            </div>
        </footer>
    )
}

export default Footer;