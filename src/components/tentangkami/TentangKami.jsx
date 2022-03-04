import React from "react";
import About from "../../img/tentang-kami.png";
import styled from "./tentangkami.css";
export default function TentangKami() {
  return (
    <div>
      <section id="tentang-kami">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="card-title text-center">
                    Tentang <span>Kami</span>{" "}
                  </div>
                  <div className="row">
                    <div className="col-md-6 me-auto">
                      <img src={About} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-5 ms-auto" id="right">
                      <span>Program Vokasi</span> adalah program pendidikan pada
                      jenjang pendidikan tinggi yang bertujuan untuk
                      mempersiapkan tenaga yang dapat menetapkan keahlian dan
                      ketrampilan di bidangnya, siap kerja dan mampu bersaing
                      secara global. <br /> <br />
                      Program Diploma yang dimiliki oleh{" "}
                      <span>ITL Trisakti</span> adalah: <br /> <br />
                      <span className="tentang">
                        1. Program Ahli Madya(D III)
                      </span>{" "}
                      <br /> <br />
                      <ol>
                        <li type="a">
                          Manajemen Transportasi Udara
                          <ol type="i">
                            <li>Peminatan di Airline and Travel Industry</li>
                            <li>Peminatan di Manajemen Bandar Udara</li>
                            <li>Peminatan di Air Cargo</li>
                          </ol>
                        </li>{" "}
                        <br />
                        <li type="a">
                          Manajemen Transportasi Laut
                          <ol type="i">
                            <li>Peminatan di Port Management</li>
                            <li>Peminatan di Shipping Management</li>
                          </ol>
                        </li>
                        <br />
                        <li type="a">
                          Manajemen Transportasi Logistik
                          <ol type="i">
                            <li>Peminatan di Retail Management</li>
                            <li>Peminatan di Warehouse Management</li>
                          </ol>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
