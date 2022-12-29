import React from "react";
import ToDo from "../videos/To-Do-App.mov"
import MamaLyss from "../videos/Mama_Lyss'_Kitchen.mov"
import TeaCozy from "../videos/Tea-Cozy.mov";
import Footer from "./Footer";

function PortfolioPage() {
    return ( 
        <div>
                <div className="row bg bg-dark text-white mt-5 py-5 rounded text-center d-flex align-items-center justify-content-center" >
                    <div className="col-lg d-flex text-center align-items-center justify-content-center">
                        <div className=" my-2 py-2">
                            <video src={ToDo} height="300px" className="rounded" controls muted autoPlay></video>
                        </div>
                    </div>
                    <div className="col-lg text-center d-flex align-items-center justify-content-center">
                        <div>
                            <p>
                                <em>To-Do App: </em>  This app is built with HTML, CSS, and Javascript. Bootstrap columns are leveraged for styling and responsiveness. The app accepts user inputs for the dates the task starts and ends, as well as the task itself. New rows are created on the table below as each task is dynamically added, and the user has the option to delete any task after creation.

                            </p>
                        </div>
                    </div>
                    
                </div>
                <div className="row bg bg-secondary text-white mt-5 py-5 rounded text-center d-flex align-items-center justify-content-center" >
                    <div className="col-lg text-center d-flex align-items-center justify-content-center">
                        <div>
                            <p>
                                <em>Mama Lyss' Kitchen: </em>  This project was created with HTML and CSS, while leveraging Bootstrap throughout the 3 pages. It features an automatically changing image carousel on page 2, and the option to sign up for a rewards program with the company.

                            </p>
                            </div>
                        </div>
                    <div className="col-lg d-flex text-center  justify-content-center">
                        <div>
                            <video src={MamaLyss} height="300px" className="rounded" controls muted autoPlay></video>
                        </div>
                    </div>
                </div>
                <div className="row bg bg-dark text-white mt-5 py-5 rounded text-center d-flex align-items-center justify-content-center" >
                    <div className="col-lg d-flex text-center align-items-center justify-content-center">
                        <div className=" my-2 py-2">
                            <video src={TeaCozy} height="300px" className="rounded" controls muted autoPlay></video>
                        </div>
                    </div>
                    <div className="col-lg text-center d-flex align-items-center justify-content-center">
                        <div>
                            <p>
                                <em>Tea Cozy: </em>  This project is for a company that sells tea and primarily utilized CSS Flexbox throughout the page.

                            </p>
                        </div>
                    </div>
                    
                </div>
            <Footer/>
        </div>
     );
}

export default PortfolioPage;