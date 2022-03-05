import React from "react";
import Gambar from "../../../img/carousel-mtl.png";
import styled from "./carouselmtl.css";
export default function CarouselMtl() {
  return (
    <div>
      <section id="carousel-mtl">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Gambar} className="d-block w-100 img-fluid" alt="..." />
              <div class="carousel-caption">
                <h1 className="mtl-h1">Program Ahli Madya (D III)</h1>
                <h2 className="mtl-h2">Manajemen Transportasi Laut</h2>
                <h3 className="mtl-h3">
                  Institut Transportasi dan Logistik <span>Trisakti</span>{" "}
                </h3>

                <div class="d-grid gap-2 col-6 mx-auto selengkapnya mt-5">
                  <a href="#visi-mtl">
                    <button class="btn mt-5" type="button">
                      <h6>selengkapnya</h6>
                      <i className="fa-solid fa-angles-down"></i>
                    </button>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
