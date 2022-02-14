import React from "react";
import styled from "./kenapa.css";
import Logo from "../../../img/landing-logo1.png";
import Logo1 from "../../../img/landing-logo2.png";
import Logo2 from "../../../img/landing-logo3.png";
export default function Kenapa() {
  return (
    <div>
      <section id="kenapa">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h5 className="kenapa-h5">
                Kenapa Memilih{" "}
                <span>Institut Transportasi dan Logistik Trisakti?</span>
              </h5>
            </div>
            <div className="col-md-7 ms-auto">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-2 justify-content-center my-auto">
                      <img src={Logo} alt="" />
                    </div>
                    <div className="col-md-9 my-auto ms-auto">
                      <h5 className="card-h5">Blended Learning</h5>
                      <p className="card-p">
                        Perkuliahan dilakukan dengan 2 cara, yaitu Offline dan
                        Online. Pembelajaran online dilakukan dengan menggunakan
                        Zoom & Gmeet, sedangkan Pembelajaran Offline langsung
                        datang ke kelas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-2 justify-content-center my-auto">
                      <img src={Logo1} alt="" />
                    </div>
                    <div className="col-md-9 my-auto ms-auto">
                      <h5 className="card-h5">Pengajar Berkualitas</h5>
                      <p className="card-p">
                        Dosen yang mengajar ITL Trisakti berasal dari lulusan
                        perguruan tinggi terbaik yang berada di dalam negeri
                        maupun luar negeri.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-2 justify-content-center my-auto">
                      <img src={Logo2} alt="" />
                    </div>
                    <div className="col-md-9 my-auto ms-auto">
                      <h5 className="card-h5">Kemudahan Pembayaran</h5>
                      <p className="card-p">
                        Pembayaran uang semester dapat dilakukan dengan beberapa
                        skema yang telah ditetapkan oleh Pihak ITL Trisakti.
                      </p>
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
