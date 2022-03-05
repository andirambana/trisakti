import React from "react";
import { Link } from "react-router-dom";
import Gambar from "../../../img/carousel-mlm2.png";
import Kurimlm from "../../kurimlm/Kurimlm";
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
              <h3 className="mlm-h3 mb-5">
                Institut Transportasi dan Logistik <span>Trisakti</span>{" "}
              </h3>

              <div class="d-grid gap-2 col-6 mx-auto selengkapnya mt-5">
                <a href="#visi-mlm">
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
    </div>
  );
}

{/* <div>
      <section id="carouselMLM">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Gambar} className="w-100 img-fluid" alt="..." />
              <div className="row">
                <div className="col-md-12">
                  <div className="carousel-caption me-auto">
                    <h1>Program Ahli Madya (D III)</h1>
                    <h1 className="MLM">Manajemen Logistik dan Material</h1>
                    <h1>Institut Transportasi dan Logistik <span>Trisakti</span> </h1>
                    <div className="col-md-12 mx-auto text-center selengkapnya ">
                      <h6>selengkapnya</h6>
                      <i className="fa-solid fa-angles-down"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div> */}