import React, { useState } from "react";

function AddMoto({handleAddmoto }) {
  const [Image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [categorie, setcategorie] = useState("");
  const [price, setprice] = useState("");
  return (
    <div>
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        Name
      </label>
      <input
        className="form-control form-control-lg"
        onChange={(e) => setName(e.target.value)}
        type="text"
        name="name"
        placeholder="name"
        aria-label=".form-control-lg example"
      />
    </div>

    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        imageUrl
      </label>
      <input
        className="form-control form-control-lg"
        onChange={(e) => setImage(e.target.value)}
        type="text"
        name="name"
        placeholder="imageUrl"
        aria-label=".form-control-lg example"
      />
    </div>

    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">
      categorie
      </label>
      <input
        className="form-control form-control-lg"
        onChange={(e) => setcategorie(e.target.value)}
        type="text"
        name="name"
        placeholder="categorie"
        aria-label=".form-control-lg example"
      />
    </div>

    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">
      price
      </label>
      <input
        className="form-control form-control-lg"
        onChange={(e) => setprice(e.target.value)}
        type="text"
        name="name"
        placeholder="price"
        aria-label=".form-control-lg example"
      />
    </div>

    <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        Description
      </label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <div className="mb-3">
        <button
          onClick={() => handleAddmoto({ Image, name, description, categorie,price})}
          type="button"
          className="btn btn-primary"
        >
          add
        </button>
      </div>
    </div>
  </div>
  )
}

export default AddMoto
