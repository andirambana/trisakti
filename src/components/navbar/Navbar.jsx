import React from "react";
import Logo from "../../img/logo-navbar.png";
import styled from "./navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="" srcset="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse my-auto"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Beranda
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Visi dan Misi
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Program Studi
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Transportasi Udara
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Transportasi Laut
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Logistik dan Material
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Profil
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Transportasi Udara
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Transportasi Laut
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Logistik dan Material
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Kontak
                </a>
              </li>
            </ul>
            <button className="btn btn-primary btn-pendaftaran" type="submit">
              Pendaftaran
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
