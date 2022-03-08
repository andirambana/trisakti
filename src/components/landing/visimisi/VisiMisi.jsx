import styled from "./visimisi.css";
import React from "react";
import Direktur from "../../../img/foto-direktur.png";
import { Link } from "react-router-dom";
export default function VisiMisi() {
  return (
    <div>
      <section id="visi-misi">
        <div className="container">
          <div className="row">
            <div className="col-md-4 me-auto">
              <div className="card shadow">
                <div className="card-title mx-auto">
                  Sambutan <span>Direktur</span>{" "}
                </div>
                <img src={Direktur} alt="" className="img-fluid" />
                <div className="card-title1">Direktur Vokasi</div>
                <div className="card-title2">
                  Dr. (Cand) Yulianti Keke. SE,M.Si
                </div>
                <div className="card-text">
                  lorem ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but{" "}
                  <Link to="/sambutan-direktur" className="link-direktur">
                    Selengkapnya...
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-7 ms-auto">
              <div className="card mx-auto shadow-sm">
                <div className="card-title text-center">Visi</div>
                <hr className="mx-auto" />
                <div className="card-body">
                  Pada tahun 2027, Menjadi Program Pendidikan Vokasional dalam
                  bidanng Manajemen Transportasi Laut, ManjaemenTransportasi
                  Udara dan Manajemen Logistik dan Material yang terkemuka,
                  berbudaya dan bereputasi global
                </div>
              </div>
              <div className="card mx-auto shadow-sm mt-1">
                <div className="card-title text-center">Misi</div>
                <hr className="mx-auto" />
                <div className="card-body">
                  <ol type="1">
                    <li>
                      Menyelenggarakan proses pembelajaran manajemen
                      transportasi laut, manajemen transportasi udara dan
                      manajemen logistik dan material berdasarkan Standar Mutu
                      Nasional dan Internasional.
                    </li>{" "}
                    <br />
                    <li>
                      Menyelenggarakan penelitian dan kajian pengetahuan baru
                      bidang manajemen transportasi laut, manajemen transportasi
                      udara dan manajemen logistik dan material sesuai kebutuhan
                      bangsa dan dunia.
                    </li>{" "}
                    <br />
                    <li>
                      Melaksanakan pelayanan pelatihan, konsultasi, dan
                      memberikan masukan kepada pemerintah dan pelaku industri
                      terhadap upaya untuk mengatasi maslalah transportasi laut
                      lingkup nasional dan internasional
                    </li>
                  </ol>
                </div>
              </div>
              <div className="card mx-auto shadow-sm mt-1">
                <div className="card-title text-center">Tujuan</div>
                <hr className="mx-auto" />
                <div className="card-body">
                  <ol type="1">
                    <li>
                      Menghasilkan lulusan yang menguasai ilmu pengetahuan dan
                      teknologi bidang manajemen transportasi laut, manajemen
                      transportasi udara dan manajemen logistik dan material
                      yang cerdas dan kompetitif.
                    </li>{" "}
                    <br />
                    <li>
                      Menghasilkan karya penelitian yang mendukung kualitas
                      proses pembelajaran penerapan ilmu pengetahuan dan
                      teknologi bidang manajemen transportasi laut, manajemen
                      transportasi udara, dan manajemen logistik dan material.
                    </li>{" "}
                    <br />
                    <li>
                      Terlaksananya kegiatan pengabdian kepada masyarakat dan
                      kerjasama bidang manajemen transportasi laut, manajemen
                      transportasi udara dan manajemen logistik dan material
                      secara profesional dan bermartabat.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
