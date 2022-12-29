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
            <nav className='text-center d-flex justify-content-around py-1 text-dark'>
                <Link to="/about" className="text-white">About</Link>
                <Link to="/portfolio" className="text-white">Portfolio</Link>
                <Link to="/resume" className="text-white">Resume</Link>
          </nav>
        </div>
     );
}

export default Navbar;