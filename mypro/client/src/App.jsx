import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Listmoto from "./components/listmoto"
import AddMoto from './components/AddMoto'
import UpdateMoto from './components/UpdateMoto'
function App() {
  const [moto, setmoto] = useState([]);
  const [view, setView] = useState("home");
  const [currentmoto, setCurrentmoto] = useState(null);
  const fetch = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/moto/");
      console.log(response.data);
      setmoto(response.data);
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    fetch();
  }, []);
  const changeView = (v) => {
    console.log("view", v);
    setView(v);
  }
  const handleToggle = async (id) => {
    console.log("id", id);
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/moto/${id}`
      );
      console.log(response.data);
      fetch();
    } catch (error) {
      throw error;
    }
  }
  const handleDelete = async (id) => {
    console.log("id", id);
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/moto/${id}`
      );
      // console.log(response.data);
      fetch();
    } catch (error) {
      throw error;
    }
  };
  const getCurrentmotoAndChnageView = (v, moto) => {
    setView(v);
    setCurrentmoto(moto);
  };
  const handleAddmoto = async (moto) => {
    console.log("moto", moto);
    try {
      // const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:5000/api/moto/",
        // { Headers: { authorization: `Bearer ${token}` } }
        // ,
        moto
      );
      // console.log(response.data);
      fetch();
      changeView("home");
    } catch (error) {
      throw error;
    }
  }
  const handleUpdateTodo = async (id, updatedTodo) => {
    console.log("updatedTodosssssssssssss", updatedTodo);
    console.log("iddddddddddddddd", id);
    try {
      const response = await axios.put(
        `http://localhost:5000/api/moto/${id}`,updatedTodo);
      // console.log(response.data);
      fetch();
      changeView("home");
    } catch (error) {
      throw error;
    }
  }
  return (
    <div>
      
    </div>
  //   <div>
  //   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  //     <div className="container-fluid">
  //       <a className="navbar-brand" onClick={() => changeView("home")}>
  //         Navbar
  //       </a>
  //       <button
  //         className="navbar-toggler"
  //         type="button"
  //         data-bs-toggle="collapse"
  //         data-bs-target="#navbarSupportedContent"
  //         aria-controls="navbarSupportedContent"
  //         aria-expanded="false"
  //         aria-label="Toggle navigation"
  //       >
  //         <span className="navbar-toggler-icon"></span>
  //       </button>
  //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  //           <li className="nav-item">
  //             <a
  //               className="nav-link active"
  //               aria-current="page"
  //               onClick={() => changeView("home")}
  //             >
  //               Home
  //             </a>
  //           </li>
  //           <li className="nav-item">
  //             <a className="nav-link" onClick={() => changeView("addmoto")}>
  //               Add task
  //             </a>
  //           </li>
  //         </ul>
  //         <form className="d-flex" role="search">
  //           <input
  //             className="form-control me-2"
  //             type="search"
  //             placeholder="Search"
  //             aria-label="Search"
  //           />
  //           <button className="btn btn-outline-success" type="submit">
  //             Search
  //           </button>
  //         </form>
  //       </div>
  //     </div>
  //   </nav>
  //   <div>
  //     {view === "home" ? (
  //       <Listmoto 
  //       moto={moto}
  //       handleToggle={handleToggle}
  //       handleDelete={handleDelete}
  //       getCurrentmotoAndChnageView={getCurrentmotoAndChnageView}
  //       />
  //     ) : 
  //     view === "addmoto" ? 
  //     (
  //       <AddMoto 
  //       handleAddmoto={handleAddmoto} 
  //       />
  //     ) : (
  //       <UpdateMoto
  //       handleUpdateTodo={handleUpdateTodo}
  //       currentmoto={currentmoto}
  //       />
  //     )}
  //   </div>
  // </div>
  )
}

export default App
