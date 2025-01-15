import React from 'react'
import OneMoto from './OneMoto';

function listmoto({
    usermoto,
    handleDelete,
    handleToggle,
    getCurrentmotoAndChnageView,
}) {
    console.log("moto in Listusermoto ", usermoto);
  return (
    <div className="container d-flex gap-3">
      {usermoto.map((el) => {
        return (
          <OneMoto
          getCurrentmotoAndChnageView={getCurrentmotoAndChnageView}
            handleDelete={handleDelete}
            key={el.id}
            usermoto={el}
            handleToggle={handleToggle}
          />
        );
      })}
    </div>
  )
}

export default listmoto
