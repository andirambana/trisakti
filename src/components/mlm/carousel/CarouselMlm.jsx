import React from "react";
import Gambar from "../../../img/carousel-mlm2.png";
import styled from "./carouselmlm.css";
export default function CarouselMlm() {
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Gambar} className="d-block w-100 img-fluid" alt="..." />
            <div class="carousel-caption">
              <h1 className="mlm-h1">Program Ahli Madya (D III)</h1>
              <h2 className="mlm-h2">Manajemen Logistik dan Material</h2>
              <h3 className="mlm-h3">
                Institut Transportasi dan Logistik <span>Trisakti</span>{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
