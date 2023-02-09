import React from "react";
import ToDo from "../videos/To-Do-App.mov"
import MamaLyss from "../videos/Mama_Lyss'_Kitchen.mov"
import TeaCozy from "../videos/Tea-Cozy.mov";
import Footer from "./Footer";
import TicTacToe from "../videos/Tic_Tac_Toe_Video.mov"
import MovieReviewApp from "../videos/Movie_Review_App_Video.mov"
import MovieReviewAPI from "../videos/Movie_Review_API_Video.mov"

function PortfolioPage() {
    return ( 
        <div>
                <div className="row bg bg-dark text-white mt-5 py-5 rounded text-center d-flex align-items-center justify-content-center" >
                    <div className="col-lg d-flex text-center align-items-center justify-content-center">
                        <div className=" my-2 py-2">
                            <video src={TicTacToe} height="90%" width="90%" className="rounded" controls muted autoPlay></video>
                        </div>
                    </div>
                    <div className="col-lg text-center d-flex align-items-center justify-content-center">
                        <div>
                            <p>
                                <em>Tic-Tac-Toe Game: </em>  This game is based off of the classic game "Tic-Tac-Toe." It was created with HTML, CSS, Bootstrap, Javascript, and jQuery. It was especially fun to create an algorithm that compared the possible winning combinations against the ones each player had already selected. 

                            </p>
                        </div>
                    </div>
                    
                </div>
                <div className="row bg bg-secondary text-white mt-5 py-5 rounded text-center d-flex align-items-center justify-content-center" >
                    <div className="col-lg text-center d-flex align-items-center justify-content-center">
                        <div>
                            <p>
                                <em>Movie Review: </em>  This project shows a movie in a way that you might see it on a popular streaming service or review site. You can give it a star rating and a review. Each review is sent to a mock api that then renders on the page. This was created with React.js, and utilizes React Hooks like useState and UseEffect. You can also edit or delete the reviews that are submitted and that will be updated in the API as well. 

                            </p>
                            </div>
                        </div>
                    <div className="col-lg d-flex text-center  justify-content-center">
                        <div>
                            <video src={MovieReviewAPI} height="90%" width="90%" className="rounded" controls muted autoPlay></video>
                        </div>
                    </div>
                </div>
                <div className="row bg bg-dark text-white mt-5 py-5 rounded text-center d-flex align-items-center justify-content-center" >
                    <div className="col-lg d-flex text-center align-items-center justify-content-center">
                        <div className=" my-2 py-2">
                            <video src={MovieReviewApp} height="90%" width="90%" className="rounded" controls muted autoPlay></video>
                        </div>
                    </div>
                    <div className="col-lg text-center d-flex align-items-center justify-content-center">
                        <div>
                            <p>
                                <em>Movie Review App</em>  This project also utilizes React.js, and makes great use of components. Bootstrap is also leveraged for styling. This app allows you to leave a review for any movie, and it appears below the movie.

                            </p>
                        </div>
                    </div>
                    
                </div>
            <Footer/>
        </div>
     );
}

export default PortfolioPage;