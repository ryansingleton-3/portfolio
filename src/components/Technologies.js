import React from "react";
import javascript from "../images/javascript(2).png"
import HTML from "../images/html5.png";
import CSS from "../images/css3(1).png";
import NodeJS from "../images/node-js.png";
import ReactJS from "../images/react.png";
import Python from "../images/python.png";
import Git from "../images/git.png";
import GitHub from "../images/GitHub-Mark.png";

function Technologies() {
    const technologies = [
        {
            name: "HTML",
            image: HTML
        },
        {
            name: "CSS",
            image: CSS
        },
        {
            name: "Javascript",
            image: javascript
        },
        {
            name: "NodeJS",
            image: NodeJS
        },
        {
            name: "ReactJS",
            image: ReactJS
        },
        {
            name: "Python",
            image: Python
        },
        {
            name: "Git",
            image: Git
        },
        {
            name: "GitHub",
            image: GitHub
        },
    ]
    return ( 
        <div className="bg bg-dark rounded">
            {technologies.map((item, index) => {
                return <img 
                src={item.image} 
                alt={item.name} 
                key={index} 
                width="5%"
                height="5%" 
                className="logos mx-5 my-4 rounded"></img>
            })}
        </div>
     );
}

export default Technologies;