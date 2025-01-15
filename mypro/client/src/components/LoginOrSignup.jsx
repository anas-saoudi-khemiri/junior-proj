import React from 'react'

function LoginOrSignup({
    changeView,
}) {
  return (
    <div>
          <div className="card" style={{ width: "18rem" }}>
      <img src="https://static.vecteezy.com/system/resources/previews/013/529/416/non_2x/motorcycle-logo-design-and-modern-superbike-silhouette-concept-template-vector.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">wlecome</h5>
        </div>
        <a onClick={() => changeView("singup")} className="btn btn-primary">
          Sing Up{" "}
        </a>
        <a onClick={() => changeView("login")}className="btn btn-primary">
          Log In{" "}
        </a>
      </div>
    </div>
  )
}

export default LoginOrSignup
