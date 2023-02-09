import React from "react";
import Facebook from "../images/social_icons/facebook-logo-2019.png"
import LinkedIn from "../images/social_icons/linkedin.png";
import Email from '../images/social_icons/email.png';
import GitHubSocial from "../images/social_icons/github (1).png";
import Angel from "../images/social_icons/angel.co_icon.webp"

function Footer() {
    const socials = [
        {
            name: "Facebook",
            image: Facebook,
            link: "https://www.facebook.com/ryan.singleton.771/"
        },
        {
            name: "LinkedIn",
            image: LinkedIn,
            link: "https://www.linkedin.com/in/ryansingleton3/"
        },
        {
            name: "Email",
            image: Email,
            link: "mailto:ryanbsingleton3@gmail.com"
        },
        {
            name: "GitHub",
            image: GitHubSocial,
            link: "https://github.com/ryansingleton-3"
        },
        {
            name: "Wellfound",
            image: Angel,
            link: "https://angel.co/profile/edit/overview"
        },

    ]
    return ( 
        <div className="bg bg-primary mt-5 rounded d-flex align-items-center justify-content-center">
            {socials.map((item, index) => {
                return (
                // <a href={item.link} target="_blank">
                    <img 
                src={item.image} 
                alt={item.name} 
                key={index.toString()} 
                height="3%"
                width="3%" 
                className="logos mx-5 my-4 rounded-circle">
                </img>
                // </a>
                
            )})}
        </div>
     );
}

export default Footer;