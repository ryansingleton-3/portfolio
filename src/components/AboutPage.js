import React from "react";
import { Container } from "react-bootstrap";
import RyanPortrait from "../images/Ryan_Headshot_square.jpg"
import FamilyPhoto from "../images/landscape-family-photo.jpg"
import Technologies from "./Technologies";
import Footer from "./Footer";

function AboutPage() {
    return ( 
        <Container>
            <div>
                <div className="row bg bg-dark text-white mt-5 py-5 rounded text-center d-flex align-items-center justify-content-center" >
                    <div className="col-lg text-center d-flex align-items-center justify-content-center">
                        <div>
                            <h3>Ryan Singleton</h3>
                            <p>Hi, My name is Ryan Singleton. I am a front-end developer. Besides coding, I love playing basketball, reading books, and trying new foods and restaurants with my wife, Alyssa. We have 3 beautiful children - all 3 years old and under.</p>
                        </div>
                    </div>
                    <div className="col-lg d-flex text-center  justify-content-center">
                        <div>
                            <img src={RyanPortrait} height="300px" className="rounded-circle main-images"></img>
                        </div>
                    </div>
                </div>
                <div className="row bg bg-secondary text-white mt-5 py-5 rounded text-center d-flex align-items-center justify-content-center" >
                    <div className="col-lg d-flex text-center align-items-center justify-content-center">
                        <div className=" my-2 py-2">
                            <img src={FamilyPhoto} maxheight="400px" className="rounded main-images"></img>
                        </div>
                    </div>
                    <div className="col-lg text-center d-flex align-items-center justify-content-center">
                        <div>
                            <p>I believe in always improving myself and love to learn from others.  In a team setting, each person brings something important to the group and we all have the opportunity to learn from each other. I believe in bettering myself in small ways every day and applying that to my work, and vice versa.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="mt-5 bg bg-dark">
                    <Technologies/>
                </div>
                <div>
                    <Footer/>
                </div>

            </div>

        </Container>

     );
}

export default AboutPage;