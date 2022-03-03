import React from "react";
import Logo from "../../img/logo-navbar.png";
import Icon1 from "../../img/icon-1.png";
import Icon2 from "../../img/icon-2.png";
import Icon3 from "../../img/icon-3.png";
import Icon4 from "../../img/icon-4.png";
import styled from "./navbar.css";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <section id="navbar">
        <div className="container" id="nav">
          <div className="row">
            <div className="col-md-4 me-auto" id="left">
              CALL US : <span> 021-851-6050</span> | 0821-7892-8892 |
              0888-2666-7666
            </div>
            <div className="col-md-2 ms-auto" id="right">
              <img src={Icon1} alt="" />
              <img src={Icon2} alt="" />
              <img src={Icon3} alt="" />
              <img src={Icon4} alt="" />
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <NavLink to="/" className="navbar-brand">
              <img src={Logo} alt="" srcset="" />
            </NavLink>
            {/* <a className="navbar-brand" href="#">
              <img src={Logo} alt="" srcset="" />
            </a> */}
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
                  <NavLink
                    to="/"
                    className="nav-link"
                    activeClassName="nav-link-active"
                    aria-current="page"
                  >
                    BERANDA
                  </NavLink>
                  {/* <a className="nav-link active" aria-current="page" href="#">
                    BERANDA
                  </a> */}
                </li>
                <li className="nav-item dropdown ps-3 pe-3">
                  <NavLink
                    to="#"
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    PROFIL
                  </NavLink>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink className="dropdown-item" to="/tentang-kami">
                        Tentang Kami
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/sambutan-direktur"
                      >
                        Sambutan Rektor
                      </NavLink>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Struktur Organisasi
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown ps-3 pe-3">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    PROGRAM STUDI
                  </NavLink>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/manajemen-transportasi-udara"
                      >
                        Transportasi Udara
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/manajemen-transportasi-laut"
                      >
                        Transportasi Laut
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/manajemen-transportasi-logistik"
                      >
                        Logistik dan Material
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item ps-3 pe-3">
                  <a className="nav-link" href="#">
                    VISI & MISI
                  </a>
                </li>
                <li className="nav-item ps-3 pe-3">
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
      </section>
    </div>
  );
}
