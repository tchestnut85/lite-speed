import React from "react";
import chat from '../assets/chat.png';
import courses from '../assets/courses.png';
import profile from '../assets/profile.png';

const Home = () => {
  return (
    <div className="home-container">
      <h3>Expand you skill set and knowledge base at the speed of light</h3>
      <button className="home-cta-btn">
          <p className="cta-text"><a href="/signup">Sign up to start learning</a></p>
      </button>

      <div className='flex-row home-icons'>
        <div className='px-2'>
              <a className="link-home" href="/" rel='noreferrer'>
                <img 
                  src={courses}
                  alt="courses" 
                />
              </a>
        </div>
      
        <div className='px-2'>
              <a className="link-home" href="/" rel='noreferrer'>
                <img 
                  src={chat}
                  alt="chat" 
                />
              </a>
        </div>
    
        <div className='px-2'>
              <a className="link-home" href="/" rel='noreferrer'>
                <img 
                  src={profile} 
                  alt="profile" 
                />
              </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

