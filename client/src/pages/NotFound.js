import Footer from '../components/Footer';
import Header from '../components/Header';
import React from "react";
// import error from '../assets/404.jpg';
import error2 from '../assets/404-2.jpg';

const NotFound = () => {
  return (
    <div>
      <Header></Header>
        <h1>
          {/* <img 
            src={error}
            alt="404error"
            className="error-img"
          /> */}
          <img 
            src={error2}
            alt="404error"
            className="error-img"
          />
        </h1>
        <Footer></Footer>
    </div>
  );
};

export default NotFound;