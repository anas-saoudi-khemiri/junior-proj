import React, { useState } from "react";

function LogIn({handelgetoneuser}) {
      const [password, setpassword] = useState("");
      const [email, setemail] = useState("");
  return (
<div>

<div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">
      E-mail
      </label>
      <input
        className="form-control form-control-lg"
        onChange={(e) => setemail(e.target.value)}
        type="text"
        name="name"
        placeholder="email"
        aria-label=".form-control-lg example"
      />
    </div>

    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        password
      </label>
      <input
        className="form-control form-control-lg"
        onChange={(e) => setpassword(e.target.value)}
        type="text"
        name="name"
        placeholder="password"
        aria-label=".form-control-lg example"
      />
    </div>

    <div className="mb-3">
      <div className="mb-3">
        <button
          onClick={() => handelgetoneuser(email)}
          type="button"
          className="btn btn-primary"
        >
          Log In
        </button>
      </div>
    </div>
  </div>
  )
}

export default LogIn
