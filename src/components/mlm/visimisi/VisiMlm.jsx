import React from "react";
import styled from "./visimlm.css";
export default function VisiMlm() {
  return (
    <div>
      <section id="visi-mlm">
        <div className="container">
          <div className="row text-center">
            <h1 className="visi-h1">D3 Vokasi</h1>
            <h2 className="visi-h2">Manajemen Logistik dan Material</h2>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card">
                <div className="card-title">Visi</div>
                <hr className="mx-auto" />
                <div className="card-body">
                  Pada tahun 2027, menjadi program studi yang unggul dalam
                  membagun ahli madya dibidang Manajemen Logistik dan Material
                  yang bereputasi global.
                </div>
              </div>
              <div className="card">
                <div className="card-title">Misi</div>
                <hr className="mx-auto" />
                <div className="card-body">
                  <ol type="1">
                    <li>
                      Menyelenggarakan pendidikan dan pengajaran yang efektif
                      dan efisien di bidang Manajemen Logistik dan Material.
                    </li>
                    <li>
                      Mengembangkan kemampuan intelektual melalui penelitian dan
                      pengkajian bidang Manajemen Logistik dan Material.
                    </li>
                    <li>
                      Melaksanakan kegiatan pengabdian masyarakat dalam bidang
                      Manajemen Logistik dan Material. Membangun Jaringan
                      eksternal yang bersifat Nasional maupun Internasional yang
                      akan mendukung percapaian visi program studi.
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
