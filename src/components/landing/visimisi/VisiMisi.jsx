import styled from "./visimisi.css";
import React from "react";
import Direktur from "../../../img/sambutan-rektor.png";
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
                  Prof. Dr. John Doe Loripsum, S.T., M.T
                </div>
                <div className="card-text">
                  lorem ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but{" "}
                  <a href="" className="link-direktur">
                    Selengkapnya...
                  </a>
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
                  1. Menyelenggarakan proses pembelajaran manajemen transportasi
                  laut, manajemen transportasi udara dan manajemen logistik dan
                  material berdasarkan Standar Mutu Nasional dan Internasional{" "}
                  <br /> <br />
                  2. Menyelenggarakan penelitian dan kajian pengetahuan baru
                  bidang manajemen transportasi laut, manajemen transportasi
                  udara dan manajemen logistik dan material sesuai kebutuhan
                  bangsa dan dunia <br /> <br />
                  3. Melaksanakan pelayanan pelatihan, konsultasi, dan
                  memberikan masukan kepada pemerintah dan pelaku industri
                  terhadap upaya untuk mengatasi maslalah transportasi laut
                  lingkup nasional dan internasional
                </div>
              </div>
              <div className="card mx-auto shadow-sm mt-1">
                <div className="card-title text-center">Tujuan</div>
                <hr className="mx-auto" />
                <div className="card-body">
                  1. Menghasilkan lulusan yang menguasai ilmu pengetahuan dan
                  teknologi bidang manajemen transportasi laut, manajemen
                  transportasi udara dan manajemen logistik dan material yang
                  cerdas dan kompetitif <br />
                  <br />
                  2. Menghasilkan karya penelitian yang mendukung kualitas
                  proses pembelajaran penerapan ilmu pengetahuan dan teknologi
                  bidang manajemen transportasi laut, manajemen transportasi
                  udara, dan manajemen logistik dan material <br />
                  <br />
                  3. Terlaksananya kegiatan pengabdian kepada masyarakat dan
                  kerjasama bidang manajemen transportasi laut, manajemen
                  transportasi udara dan manajemen logistik dan material secara
                  profesional dan bermartabat.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
