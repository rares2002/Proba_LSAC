import Logo from "./Logo";
import React from "react";
import image1 from "../static/images/image1.png";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg nav justify-content-end">
      <a class="navbar-brand" href="/"><img style={{ objectFit: "contain" }} src={image1}></img></a>
      <div class="container-fluid justify-content-end">
        <button class="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse nav justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link">
                <button type="button" class="btn btn-transparent" style={{ color: "white" }} data-bs-toggle="modal" data-bs-target="#modalLogare"> Logare </button>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <button type="button" class="btn btn-transparent" style={{ color: "white" }} data-bs-toggle="modal" data-bs-target="#modalRegister"> Register </button>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  );
}
export default Navbar;