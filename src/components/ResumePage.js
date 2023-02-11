import React from "react";
import Footer from "./Footer";
import Technologies from "./Technologies";
import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card"
import { Container } from "react-bootstrap";
import ReviewSection from "./ReviewSection"


function ResumePage() {
    return ( 
        <Container fluid>
            <div>
                <div className="row border border-black bg bg-secondary text-white text-center mt-5 rounded" >
                        <div className="col-lg">
                            <h1>Summary</h1>
                            <p>I am a recent graduate of a Front End Software Engineering Bootcamp by Promineo Tech. I have just under 2 years of experience in Front End Development, including a learning platform called Codecademy, and I am pursuing a Bachelor's Degree in Computer Science from BYU-Idaho. I am very experienced with HTML, CSS, Python, and JavaScript. I am also familiar with React.js, Bootstrap, jQuery, AJAX, Git, GitHub, Object-Oriented Programming (OOP), and Responsive Web Design. 
                                Also, I have extensive knowledge in digital marketing in general, as well as SEM (Search Engine Marketing). I have multiple certifications in the industry and have worked at a digital marketing agency for 2 years. During my time at the agency, I have used my coding knowledge to speed up many processes, and improve efficiency in ad reporting by up to 20% for each employee in my department. </p>
                        </div>
                </div>
                <div className="row border border-black bg bg-dark text-center text-white mt-5 py-5 rounded" >
                        <div className="col-lg text-center">
                            <h2>Education</h2>
                            <Accordion className="text-center py-5">
                                <Accordion.Item className="text-center" eventKey="0">
                                    <Accordion.Header className="text-center">Promineo Tech</Accordion.Header>
                                    <Accordion.Body>
                                        <h3>Front End Software Development BootCamp</h3>
                                        <ul>
                                        <li>Use HTML/CSS, JavaScript, React.js, Bootstrap</li>
                                        <li>Unit Testing</li>
                                        <li>Object-Oriented Programming</li>
                                        <li>New Technologies and Updates</li>
                                        <li>jQuery & AJAX</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item className="text-center" eventKey="1">
                                    <Accordion.Header className="text-center">BYU-Idaho</Accordion.Header>
                                    <Accordion.Body>
                                            <h3>Bachelor's Degree - Computer Science (Graduation March 2024)</h3>
                                        <ul>
                                            <li>Conversion of Software Requirement into Code</li>
                                            <li>Object-Oriented Programming</li>
                                            <li>Development of Dynamic Webpages & Programs</li>
                                            <li>Python, HTML/CSS, C#, & JavaScript</li>
                                            <li>Develop Design & Problem-Solving Skills</li>
                                            <li>Develop Strong Communication & Interpersonal Skills</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item className="text-center" eventKey="2">
                                    <Accordion.Header className="text-center">Codecademy</Accordion.Header>
                                    <Accordion.Body>
                                            <h3>Front End Engineer Career Path</h3>
                                        <ul>
                                            <li>HTML, CSS, JavaScript</li>
                                            <li>Responsive Design</li>
                                            <li>Git and GitHub</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                </div>
                <div className="row border border-black bg bg-primary text-center text-white mt-5 py-5 rounded" >
                    <div className="col-lg">
                        <h2>Experience</h2>
                        <Accordion className="text-center py-5">
                            <Accordion.Item className="text-center" eventKey="0">
                                <Accordion.Header className="text-center">Amazon Ads Lead PPC Specialist</Accordion.Header>
                                <Accordion.Body>
                                    <h3>OMG Commerce (Digital Marketing Agency)</h3>
                                    <ul>
                                    <li>Write code using Python, JavaScript, and Google Apps Scripts to improve reporting across the department and save on average of 20% of each employee’s time.</li>
                                        <li>Generate an average of 30% year over year sales increase for each client over past 2 years</li>
                                        <li>Manage $200-$250k of monthly ad spend and over $3 Million in monthly sales</li>
                                        <li>Analyze complex data trends and strategies within client accounts of more than 300 ad campaigns and communicate with non-technical teams in an understandable way</li>
                                        <li>Collaborate with both external and internal teams of 10+ people to reach individual and company-wide sales and efficiency goals</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item> 
                            <Accordion.Item className="text-center" eventKey="1">
                                <Accordion.Header className="text-center">Bilingual Fraud Specialist</Accordion.Header>
                                <Accordion.Body>
                                    <h3>JPMorgan Chase & Co.</h3>
                                    <ul>
                                        <li>Engage in interactive dialogue with customers through active listening</li>
                                        <li>Determine customer needs and provide appropriate solutions through relationship building</li>
                                        <li>Use effective verbal and written communications with both external and internal customers</li>
                                        <li>Effectively prioritize work to ensure efficiency in a fast-paced environment</li>
                                        <li>Abide by all applicable regulatory and department practices and procedures</li>
                                        <li>Be familiar and fluent with all Windows Operating Systems and Microsoft Office Tools</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className="text-center" eventKey="2">
                                <Accordion.Header className="text-center">Bank Teller</Accordion.Header>
                                <Accordion.Body>
                                    <h3>Telhio Credit Union</h3>
                                    <ul>
                                        <li>Perform positively in a team environment, working toward achieving performance goals</li>
                                        <li>Process transactions and balance cash drawers accurately and efficiently </li>
                                        <li>Assist members with transactions and provide information on products and services</li>
                                        <li>Present an overall professional image in the areas of dress, communications and conduct</li>
                                        <li>Meet all new account and other feature goals set by management and work as a team to achieve them</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className="text-center" eventKey="3">
                                <Accordion.Header className="text-center">Assistant to the Mission President - Volunteer</Accordion.Header>
                                <Accordion.Body>
                                <h3>The Church of Jesus Christ of Latter-Day Saints</h3>
                                <ul>
                                    <li>Trained entire organization of over 250 volunteers in prospecting, networking, communication and leadership, went on to become leaders in organization</li>
                                    <li>Directed and organized volunteer efforts of over 100 people daily</li>
                                    <li>Organized collaboration of teams and assigned volunteers to new positions every 6 weeks to increase productivity and effectiveness</li>
                                    <li>Systematized efforts in prospecting and reporting and improved measurability across organization</li>
                                    <li>Communicated progress and strategy implementation to the Mission President (head of organization) on a weekly basis</li>
                                </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
                <div className="row bg bg-white mt-5 py-5 rounded" >
                    <div className="col-sm-6">
                        <Card>
                            <Card.Header><h2>Skills</h2></Card.Header>
                            <Card.Body>
                            <ul>
                                <li>Conversion of Software Requirement into Code</li>
                                <li>Analytical Thinking/ Creative Problem Solving</li>
                                <li>Constant Improvement / Desire to Learn</li>
                                <li>Data Analysis and Actionable Insights</li>
                                <li>Experimentation and Testing</li>
                                <li>Attention to Detail</li>
                                <li>Languages: English & Spanish (Fluent)</li>
                                <li>Communication (Written and Verbal)</li>
                                <li>Ability to Learn from Mistakes/ Constant Improvement</li>
                            </ul>
                            </Card.Body>
                        </Card>
                    </div>      
                
                    <div className="col-sm-6">
                        <Card>
                            <Card.Header><h2>Technical Knowledge</h2></Card.Header>
                            <Card.Body>
                            <ul>
                                <li><strong>Javascript</strong> (Including ES6, node.js)</li>
                                <li><strong>React.js</strong> (JSX, Redux, Hooks, Function & Class Components)</li>
                                <li><strong>jQuery</strong></li>
                                <li><strong>REST APIs</strong> (Fetch, Async/Await, CRUD Applications, json, AJAX)</li>
                                <li><strong>Python</strong> (Programming with Functions)</li>
                                <li><strong>C#</strong> (Programming with Classes (OOP))</li>
                                <li><strong>HTML</strong></li>
                                <li><strong>CSS</strong> (Media Queries, Responsive Design, & Bootstrap)</li>
                                <li><strong>Version Control</strong> (Git, Github)</li>
                            </ul>
                            </Card.Body>
                        </Card>
                    </div> 
                </div>
            </div>
                <div>
                    <ReviewSection/>
                </div>
                <div className="row mt-5 rounded">
                    <Technologies/>
                </div>
                <div className="row mt-5 rounded">
                    <Footer/>
                </div>
                
        </Container>
     );
}

export default ResumePage;