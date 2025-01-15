import React from 'react'

function OneMoto({
    handleToggle,
    uesermoto,
    handleDelete,
    getCurrentmotoAndChnageView,
}) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={uesermoto.Image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{uesermoto.name}</h5>
        <div className="d-flex gap-1">
          <p className="card-text">{uesermoto.description}</p>
        </div>
        <div className="d-flex gap-1">
          <p className="card-text">{uesermoto.categorie}</p>
        </div>
        <div className="d-flex gap-1">
          <p className="card-text">{uesermoto.price}</p>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={() => handleToggle(uesermoto.id)}
            className=""
            defaultChecked={uesermoto.completed}
          />
        </div>
        <a onClick={() => handleDelete(uesermoto.id)} className="btn btn-primary">
          delete{" "}
        </a>
        <a
          onClick={() => getCurrentmotoAndChnageView("update", uesermoto)}
          className="btn btn-primary"
        >
          update{" "}
        </a>
      </div>
    </div>
  )
}

export default OneMoto
