import React from "react";
import Profil from "../../../img/profil-mtu.png";
import styled from "./profilmtl.css";
export default function ProfilMtl() {
  return (
    <div>
      <section id="profil-mtl">
        <div className="container">
          <div className="row">
            <h1 className="profil-h1 text-center">
              Profil <span>Lulusan</span>{" "}
            </h1>
            <div className="col-md-4">
              <div className="card-mtl">
                <div className="card-body">
                  <div className="card-text">
                    Mampu menyelesaikan pekerjaan sebagai{" "}
                    Menguasai <span>praktek kerja</span> secara umum di bidang kepelabuhanan, 
                    prinsip-prinsip kepelabuhanan. Menguasai cara-cara <span>pengujian 
                    dan pengukuran</span>. Menguasai metode penyelesaian masalah <span>operasional, 
                    sumberdaya, perangkat teknologi informasi, dan teknologi modern </span>
                     yang sesuai untuk menyelesaikan masalah di bidang kepelabuhanan.
                  </div>
                  <center>
                    <img src={Profil} alt="" className="img-fluid" />
                  </center>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-mtl">
                <div className="card-body">
                  <div className="card-text">
                    Menguasai kepelabuhanann tentang <span>codes dan standard</span> yang berlaku 
                    di bidang kepelabuhanan. Menguasai <span>prinsip dan issue</span> terkini dalam 
                    masalah di bidang kepelabuhanan. Menguasai pengetahuan tentang teknik <span>berkomunikasi</span>.
                  </div>
                  <center>
                    <img src={Profil} alt="" className="img-fluid" />
                  </center>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-mtl">
                <div className="card-body">
                  <div className="card-text">
                    Menguasai pengetahuan tentang <span>perkembangan teknologi</span> terbaru dan terkini. 
                    Menguasai prinsip dan tata cara kerja operasional serta pelaksanaan 
                    keselamatan dan <span>kesehatan kerja (K3)</span>.
                  </div>
                  <center>
                    <img src={Profil} alt="" className="img-fluid" />
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
