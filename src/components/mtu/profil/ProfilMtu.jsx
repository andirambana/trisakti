import React from "react";
import styled from "./profilmtu.css";
import Profil from "../../../img/profil-mtu.png";
export default function ProfilMtu() {
  return (
    <div>
      <section id="profil-mtu">
        <div className="container">
          <div className="row">
            <h1 className="profil-h1 text-center">
              Profil <span>Lulusan</span>{" "}
            </h1>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-text">
                    Mampu menyelesaikan pekerjaan sebagai{" "}
                    <span>
                      Operator Ground Handling, ahli di bidang travel industry
                    </span>{" "}
                    pada perusahaan transportasi udara pada bisnis Airlines,
                    Bandar Udara, Cargo dan Freight Forwarding. sesuai dengan
                    bidang keahlian terapannya yang didasarkan pada pemikiran
                    logis , inovatif, dan bertanggung jawab atas hasilnya secara
                    mandiri.
                  </div>
                  <center>
                    <img src={Profil} alt="" className="img-fluid" />
                  </center>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-text">
                    Mampu menyelesaikan pekerjaan sebagai{" "}
                    <span>Instruktur</span> pada perusahaan transportasi udara
                    pada bisnis Airlines, Travel Industry, Bandar Udara, Cargo
                    dan Freight Forwarding. sesuai dengan bidang keahlian
                    terapannya yang didasarkan pada pemikiran logis , inovatif,
                    dan bertanggung jawab atas hasilnya secara mandiri.
                  </div>
                  <center>
                    <img src={Profil} alt="" className="img-fluid" />
                  </center>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-text">
                    Mampu menyelesaikan pekerjaan sebagai <span>Wirausaha</span>{" "}
                    pada perusahaan transportasi udara pada bisnis Airlines,
                    Travel Industry, Bandar Udara, Cargo dan Freight Forwarding.
                    sesuai dengan bidang keahlian terapannya yang didasarkan
                    pada pemikiran logis , inovatif, dan bertanggung jawab atas
                    hasilnya secara mandiri.
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
