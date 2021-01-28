import React from 'react';

function Footer() {

    return (
        <footer className="d-flex justify-content-center footer">
            <div className='flex-row space-between'>
                <div className='px-2'>
                    <h2>Warp <i>Speed</i></h2>
                    <p>
                        Expand your skill set and knowledge base at the speed of light
                    </p>
                </div>
                <div className="signup-form">
                        Sign up for updates
                </div>
            </div>
        </footer>
    )
}

export default Footer;