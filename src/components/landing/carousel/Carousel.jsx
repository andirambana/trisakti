import React from "react";
import styled from "./carousel.css";
import Gambar from "./../../../img/carousel.jpeg";
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
          <img src={Gambar} className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  );
}
