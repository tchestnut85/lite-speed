import React from "react";
import error from '../assets/404-2.jpg';

const NotFound = () => {

  return (
    <div>
      <img
        src={error}
        alt="404error"
        className="error-img"
      />
    </div>
  );
};

export default NotFound;