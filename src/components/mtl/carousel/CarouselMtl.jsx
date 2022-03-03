import React from "react";
import Gambar from "../../../img/carousel-mtl.png";
export default function CarouselMtl() {
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
              <h1>Program Ahli Madya (D III)</h1>
              <h1>Manajemen Transportasi Laut</h1>
              <h1>Institut Transportasi dan Logistik Trisakti</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
