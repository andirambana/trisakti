import React from "react";
import Gambar from "./../../../img/carousel.png";
export default function Carousel() {
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
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
