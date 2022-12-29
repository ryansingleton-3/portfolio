import React, { useState, useEffect } from "react";
import { deleteReview, updateReview } from "./Services";
import StarRating from "./StarReview";

function Reviews({ data, setData, review, setReview, addReview, getData, editing, setEditing, editedReview, setEditedReview }) {
  
  
  const handleInputChange = async (e) => {
    e.preventDefault();
    // setReview(e.target.innerText);
  };

  
  const deleteCurrentReview = async (e) => {
    e.preventDefault();
    let itemID = e.target.id;
    await deleteReview(itemID);
    getData();
  };

 

  const handleEnterEdit = async (event) => {
    if (event.key === 'Enter') {
      let newReview = {id: editing.id, review: event.target.value}
      
      handleEditSave(newReview)
    }
    
  }

  const handleEditSave = async (updatedReview) => {
    if (handleEnterEdit) {
      await updateReview(updatedReview)

    }
    await getData()
  }

  return (
    <div>
        <div className="text-white text-center mb-3 pt-5">
            <h2>Reviews</h2>
        </div>
      <div className="container text-center bg-dark" id="review-div">
        <form id="review-form" onSubmit={addReview}>
          <label htmlFor="review-text">
            <input
              type="text"
              name="review-text"
              id="review-text"
              placeholder="Write a review"
              style={{ borderRadius: "10px" }}
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="mb-3 text-center"
            ></input>
            <br></br>
            <button
              className="btn btn-success"
              style={{ marginTop: "2%" }}
              id="submit-button"
            >
              Submit Review
            </button>
          </label>
        </form>
        <StarRating />
      </div>
      <div
        className="card text-center"
        style={{
          maxHeight: "500px",
          overflow: "auto",
          maxWidth: "100%",
          marginTop: "2%",
          borderRadius: "none",
        }}
      >
        {data &&
          data.map((item) => (
            <div
              className="block bg-dark border border-bottom border-white"
              style={{
                borderRadius: "1px",
                paddingTop: "1.5%",
                color: "white",
              }}
              key={item.id}
              id={item.id}
            >
              <div className="row">
                <div
                  className="col-lg"
                  // contentEditable={true}
                  // onInput={(e) => setReview(e.target.innerText)}
                  key={item.id} 
                  onDoubleClick={() => setEditing(item)}>
                  {editing === item ? (
                    <input
                      key={item.id}
                      type="text"
                      placeholder={item.review}
                      // value={item.review}
                      onChange={event => setEditedReview(event.target.value)}
                      onKeyDown={handleEnterEdit}
                    />
                  ) : (
                    item.review
                  )}
                </div>
                <div className="col-lg">
                  <button
                    className="btn btn-primary"
                    style={{
                      marginTop: "2%",
                      marginBottom: "2%",
                      marginRight: "2%",
                    }}
                    id={item.id}
                    onClick={() => setEditing(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    style={{
                      marginTop: "2%",
                      marginBottom: "2%",
                    }}
                    id={item.id}
                    onClick={deleteCurrentReview}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Reviews;
