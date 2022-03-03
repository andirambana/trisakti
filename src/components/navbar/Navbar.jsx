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
              <li className="nav-item ps-3 pe-3">
                <a className="nav-link active" aria-current="page" href="#">
                  BERANDA
                </a>
              </li>
              <li className="nav-item dropdown ps-3 pe-3">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PROFIL
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Tentang Kami
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sambutan Rektor
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Struktur Organisasi
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown ps-3 pe-3">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PROGRAM STUDI
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
              <li className="nav-item ps-3 pe-3">
                <a className="nav-link" href="#">
                  VISI & MISI
                </a>
              </li>
              <li className="nav-item ps-3 pe-3 ">
                <a className="nav-link" href="#">
                  TLM
                </a>
              </li>
            </ul>
            <button className="btn btn-primary btn-pendaftaran" type="submit">
              PENDAFTARAN
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
