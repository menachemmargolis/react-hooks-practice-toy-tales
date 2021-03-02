import React from "react";

function ToyCard({name, image, likes, id, toys, getNewLikes }) {

 function donateToy(e){
   fetch(`http://localhost:3001/toys/${id}`,{
     method: "DELETE",
     headers:{"content-type":"application-json"}
   })
   
    e.target.closest('div').remove()

 }

 function increaseLikes(){
    let like = {likes:likes += 1}
    
    fetch(`http://localhost:3001/toys/${id}`,{
      method: "PATCH",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(like)
    })
    .then(res => res.json())
    .then(data => {
      let newLikes = data.likes
      getNewLikes(id, newLikes)
    })
 }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={increaseLikes} className="like-btn">Like {"<3"}</button>
      <button  onClick={donateToy}className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;


// - _When the like button is clicked_, make a PATCH request to `/toys/:id` with
//   the id of the toy that was clicked, along with the new number of likes (this
//   should be sent in the body of the PATCH request, as a object:
//   `{ likes: 10 }`), to update the toy on the server. Clicking on the button
//   should also increase the number of likes on the DOM.