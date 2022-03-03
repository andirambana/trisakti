import React from "react";
import styled from "./carousel.css";
import jumbo1 from "./../../../img/carousel-mlm.png";
import jumbo2 from "./../../../img/carousel-mtl.png";
import jumbo3 from "./../../../img/carousel-mtu.png";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
export default function Carousel() {
  // let navigate = useNavigate();
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-caption">
          <h5>Inkubator Usaha Sosial</h5>
          <p>
            Disinilah ruang untuk mendukung para pelaku wirausaha sosial lintas
            sektor agar memberikan lebih banyak dampak positif baik terhadap
            lingkungan, sosial, dan ekonomi.
          </p>
          {/* <Link to="/donate"> */}
          <button type="button" className="btn btn-primary">
            Donasi Sekarang
          </button>
          {/* </Link> */}
        </div>
        <div className="carousel-item active">
          <img src={jumbo1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={jumbo2} className="d-block w-100 h-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={jumbo3} className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  );
}
