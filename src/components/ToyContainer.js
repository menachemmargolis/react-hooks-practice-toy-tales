import React,{useEffect, useState} from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, getNewLikes}) {
 

 const renderAllToys = toys.map((t) => {
   return (<ToyCard getNewLikes={getNewLikes} toys = {toys} key ={t.id} name={t.name} image={t.image} likes={t.likes} id={t.id} />)
 })
 
 console.log(toys)

  return (
    <div id="toy-collection">{renderAllToys}</div>
  );
}

export default ToyContainer;


// - _When the `ToyForm` is submitted_, make a POST request to `/toys` to save a
//   new toy to the server. Using the ideas of controlled form and inverse data
//   flow, think about how to render a new `ToyCard` for the toy that you created.

// - _When the `Donate to Goodwill` button is clicked_, make a DELETE request to
//   `/toys/:id` with the ID of the toy that was clicked to delete the toy from the
//   server. The `ToyCard` that you clicked on should also be removed from the DOM.

// - _When the like button is clicked_, make a PATCH request to `/toys/:id` with
//   the id of the toy that was clicked, along with the new number of likes (this
//   should be sent in the body of the PATCH request, as a object:
//   `{ likes: 10 }`), to update the toy on the server. Clicking on the button
//   should also increase the number of likes on the DOM.
