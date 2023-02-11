import React from 'react';
import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import PortfolioPage from './components/PortfolioPage';
import AboutPage from './components/AboutPage';
import ResumePage from './components/ResumePage';
import Logo from "./images/logo.png"
import NavBar from "./components/Navbar";


function App() {
  return (
    <Container>
      <Router>
        <div>
          <div className="bg bg-primary sticky-top">
              <nav className='text-center d-flex justify-content-around py-1 text-dark'>
                  <Link to="/" className="text-white nav-text">About</Link>
                  <Link to="/portfolio" className="text-white nav-text">Portfolio</Link>
                  <Link to="/resume" className="text-white nav-text">Resumé</Link>
            </nav>
          </div>   
          <Switch>
            <Route path="/portfolio">
              <PortfolioPage />
            </Route>
            <Route path="/resume">
              <ResumePage />
            </Route>
            <Route path="/">
              <AboutPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Container>
  );
}

export default App;
