import React from 'react'

function OneMoto({
    handleToggle,
    moto,
    handleDelete,
    getCurrentmotoAndChnageView,
}) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={moto.Image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{moto.name}</h5>
        <div className="d-flex gap-1">
          <p className="card-text">{moto.description}</p>
        </div>
        <div className="d-flex gap-1">
          <p className="card-text">{moto.categorie}</p>
        </div>
        <div className="d-flex gap-1">
          <p className="card-text">{moto.price}</p>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={() => handleToggle(moto.id)}
            className=""
            defaultChecked={moto.completed}
          />
        </div>
        <a onClick={() => handleDelete(moto.id)} className="btn btn-primary">
          delete{" "}
        </a>
        <a
          onClick={() => getCurrentmotoAndChnageView("update", moto)}
          className="btn btn-primary"
        >
          update{" "}
        </a>
      </div>
    </div>
  )
}

export default OneMoto
