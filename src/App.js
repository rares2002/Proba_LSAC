import { Redirect, Route, BrowserRouter } from "react-router-dom"
// import Register from "./components/Register"
import Login from "./components/Logare"
import Dasboard_stud from "./components/Dashboard_stud"
import LandP from "./components/Landing_Page"
import Navbar from "./components/navbar"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js';
const token = localStorage.getItem("token")

function App() {
  return (
    <BrowserRouter className="main-container" forceRefresh={false}>
      <Navbar />
      <div className="dashboard container-fluid">
        <div className="row">
          <Route path="/" exact>
            {
              token ? <Redirect to="/student"/> :
                      <LandP/>
            }
          </Route>
          <Route path="/home" exact component={LandP} />
          <Route path="/student" exact my ass>
            {
              !token ? <Redirect to="/"/> :
                      <Dasboard_stud/>
            }
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
