import React from 'react'
import OneMoto from './OneMoto';

function listmoto({
    moto,
    handleDelete,
    handleToggle,
    getCurrentmotoAndChnageView,
}) {
    console.log("moto in Listmoto ", moto);
  return (
    <div className="container d-flex gap-3">
      {moto.map((el) => {
        return (
          <OneMoto
          getCurrentmotoAndChnageView={getCurrentmotoAndChnageView}
            handleDelete={handleDelete}
            key={el.id}
            moto={el}
            handleToggle={handleToggle}
          />
        );
      })}
    </div>
  )
}

export default listmoto
