import React from "react";
import styled from "./carouselmtu.css";
import Gambar from "../../../img/carousel-mtu2.png";
export default function CarouselMtu() {
  return (
    <div>
      <section id="carousel-mtu">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Gambar} className="d-block w-100 img-fluid" alt="..." />
              <div class="carousel-caption">
                <h1 className="mtu-h1">Program Ahli Madya (D III)</h1>
                <h2 className="mtu-h2">Manajemen Transportasi Udara</h2>
                <h3 className="mtu-h3">
                  Institut Transportasi dan Logistik <span>Trisakti</span>{" "}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
