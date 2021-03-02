import React, {useState} from "react";

function ToyForm({toyState, setToyState}) {

  const [name, setName] = useState('')
  const [image, setImage] = useState('')

  

  function addToyToGrid(e){
    e.preventDefault()

    const newToy ={
     name,
     image,
     likes:0
    }

    fetch(`http://localhost:3001/toys`,{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(newToy)
    })
    .then(res => res.json())
    .then(data => {
      const add = [...toyState,data]
      setToyState(add)
    })

  }
    

  return (
    <div className="container">
      <form onSubmit={addToyToGrid} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;


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
