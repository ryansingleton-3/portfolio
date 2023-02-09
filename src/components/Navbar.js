import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";


function Navbar() {
    return ( 
        <div className="bg bg-primary">
            <nav className='text-center d-flex justify-content-around py-1 text-dark nav-text'>
                <Link to="/about" className="text-white nav-text">About</Link>
                <Link to="/portfolio" className="text-white nav-text">Portfolio</Link>
                <Link to="/resume" className="text-white nav-text">Resume</Link>
          </nav>
        </div>
     );
}

export default Navbar;