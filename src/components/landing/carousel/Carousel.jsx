import React from "react";
import styled from "./carousel.css";
import Gambar from "./../../../img/carousel.jpeg";
import Gambar1 from "./../../../img/btn-udara.png";
import Gambar2 from "./../../../img/btn-laut.png";
import Gambar3 from "./../../../img/btn-logistik.png";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
export default function Carousel() {
  // let navigate = useNavigate();
  return (
    <>
      <section id="carousel-landing">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Gambar} className="d-block w-100 gmbr" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="carousel-landing-h5">Direktorat Vokasi</h5>
                <h5 className="carousel-landing-h5">
                  Institut Transportasi dan Logistik
                </h5>
                <h4 className="carousel-landing-h4">Trisakti</h4>

                <div className="row">
                  <div className="col-md-4">
                    <Link
                      className="link-btn"
                      to="/manajemen-transportasi-udara"
                    >
                      <div className="card">
                        <div className="row">
                          <div className="col-md-6 my-auto" id="left">
                            <div className="card-title">D3 MANAJEMEN</div>
                            <div className="card-title-1">
                              TRANSPORTASI UDARA
                            </div>
                          </div>
                          <div className="col-md-1" id="right">
                            <img src={Gambar1} alt="" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-4">
                    <Link
                      className="link-btn"
                      to="/manajemen-transportasi-laut"
                    >
                      <div className="card">
                        <div className="row">
                          <div className="col-md-6 my-auto" id="left">
                            <div className="card-title">D3 MANAJEMEN</div>
                            <div className="card-title-2">
                              TRANSPORTASI LAUT
                            </div>
                          </div>
                          <div className="col-md-1" id="right">
                            <img src={Gambar2} alt="" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-4">
                    <Link
                      className="link-btn"
                      to="/manajemen-transportasi-logistik"
                    >
                      {" "}
                      <div className="card">
                        <div className="row">
                          <div className="col-md-6 my-auto" id="left">
                            <div className="card-title">D3 MANAJEMEN</div>
                            <div className="card-title-3">
                              LOGISTIK DAN MATERIAL
                            </div>
                          </div>
                          <div className="col-md-1" id="right">
                            <img src={Gambar3} alt="" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
