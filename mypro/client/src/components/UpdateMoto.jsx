import React, { useState } from "react";

function UpdateMoto({currentmoto,handleUpdateTodo}) {
  const [Image, setImage] = useState(currentmoto.Image);
  const [name, setName] = useState(currentmoto.name);
  const [description, setDescription] = useState(currentmoto.description);
  const [categorie, setcategorie] = useState(currentmoto.categorie);
  const [price, setprice] = useState(currentmoto.price);
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
          value={name}
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
        value={Image}
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
        value={categorie}
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
        value={price}
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
          value={description}
        ></textarea>
        <div className="mb-3">
          <button
            onClick={() =>
              handleUpdateTodo(currentmoto.id, { Image, name, description, categorie,price})
            }
            type="button"
            className="btn btn-primary"
          >
            update
          </button>
        </div>
      </div>
    </div>
  )
}

export default UpdateMoto
