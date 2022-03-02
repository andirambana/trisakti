import React from "react";
import Profil from "../../../img/profil-mtu.png";
import styled from "./profilmlm.css";
export default function ProfilMlm() {
  return (
    <div>
      <section id="profil-mlm">
        <div className="container">
          <div className="row">
            <h1 className="profil-h1 text-center">
              Profil <span>Lulusan</span>{" "}
            </h1>
            <div className="col-md-4">
              <div className="card-mlm">
                <div className="card-body">
                  <div className="card-text">
                    Mampu menyelesaikan pekerjaan sebagai{" "}
                    <span>Operator, Tehnisi dan Analis</span> pada perusahaan
                    manajemen logistik dan material pada bisnis retail dan
                    warehouse sesuai dengan bidang keahlian terapannya yang
                    didasarkan pada pemikiran logis , inovatif, dan bertanggung
                    jawab atas hasilnya secara mandiri.
                  </div>
                  <center>
                    <img src={Profil} alt="" className="img-fluid" />
                  </center>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-mlm">
                <div className="card-body">
                  <div className="card-text">
                    Mampu menyelesaikan pekerjaan sebagai{" "}
                    <span>Instruktur</span> pada perusahaan manajemen logistik
                    dan material pada bisnis retail dan warehouse sesuai dengan
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
              <div className="card-mlm">
                <div className="card-body">
                  <div className="card-text">
                    Mampu menyelesaikan pekerjaan sebagai <span>Wirausaha</span>{" "}
                    pada perusahaan manajemen logistik dan material pada bisnis
                    retail dan warehouse sesuai dengan bidang keahlian
                    terapannya yang didasarkan pada pemikiran logis , inovatif,
                    dan bertanggung jawab atas hasilnya secara mandiri.
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
