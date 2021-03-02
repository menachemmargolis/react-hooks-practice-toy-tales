import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  
    const [toys, setToys] = useState([])
  
  
   useEffect(() =>{
     fetch(`http://localhost:3001/toys`)
     .then(res => res.json())
     .then(setToys)
   },[])



  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  
  function showUpdatedLikes(id, newLikes){
   const filter =  toys.map((t) => {
      return t.id === id ? {...t, likes: newLikes} : t
    })

    setToys(filter)
  }


  return (
    <>
      <Header />
      {showForm ? <ToyForm toyState={toys} setToyState={setToys}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer getNewLikes={showUpdatedLikes}  toys ={toys}/>
    </>
  );
}

export default App;
