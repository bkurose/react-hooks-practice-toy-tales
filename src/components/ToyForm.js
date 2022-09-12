import React, { useState } from "react";

function ToyForm({ toyList, setToyList }) {
  const [newToy, setNewToy] = useState({
    id: (parseInt(Math.random() * 1000)),
    name: "",
    image: "",
    likes: 0
  })

  function handleChange(e){
    const name = e.target.name
    let value = e.target.value

    setNewToy({
      ...newToy,
      [name]: value,
    });
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch(`http://localhost:3001/toys/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToy)
    })
    .then(res => res.json())
    .then(toy => {
      const list = [...toyList]
      list.push(toy)
      setToyList(list)
    })
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          onChange={handleChange}
          value={newToy.name}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          onChange={handleChange}
          value={newToy.image}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
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
