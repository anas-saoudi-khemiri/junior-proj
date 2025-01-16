import React from 'react';
import OneMoto from './OneMoto';

function Listmoto({
  moto,
  handleDelete,
  handleToggle,
  getCurrentmotoAndChnageView,
  search,
  newlist = [],
}) {
  console.log("moto in Listmoto ", moto);
  return (
    <div className="container">
      <div className="row">
        {
          !search ? (
            moto.map((el) => {
              return (
                <div className="col-12 col-md-4" key={el.id}>
                  <OneMoto
                    getCurrentmotoAndChnageView={getCurrentmotoAndChnageView}
                    handleDelete={handleDelete}
                    moto={el}
                    handleToggle={handleToggle}
                  />
                </div>
              );
            })
          ) : (
            newlist.map((el) => {
              return (
                <div className="col-12 col-md-4" key={el.id}>
                  <OneMoto
                    getCurrentmotoAndChnageView={getCurrentmotoAndChnageView}
                    handleDelete={handleDelete}
                    moto={el}
                    handleToggle={handleToggle}
                  />
                </div>
              );
            })
          )
        }
      </div>
    </div>
  );
}

export default Listmoto;
