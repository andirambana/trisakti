import React from "react";
import styled from "./visimtl.css";
export default function VisiMtl() {
  return (
    <div>
      <section id="visi-mtl">
        <div className="container">
          <div className="row text-center">
            <h1 className="visi-h1">D3 Vokasi</h1>
            <h2 className="visi-h2">Manajemen Transportasi Laut</h2>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card">
                <div className="card-title">Visi</div>
                <hr className="mx-auto" />
                <div className="card-body">
                  Pada tahun 2027, Menjadi Program Studi yang
                  Unggul dalam Membangun Ahli Madya dibidang
                  Manajemen Oprasi dan PelayananTransportasi Laut Yang
                  Bereputasi Global
                </div>
              </div>
              <div className="card">
                <div className="card-title">Misi</div>
                <hr className="mx-auto" />
                <div className="card-body">
                1. Menyelenggarakan proses pembelajaran manajemen operasi dan 
                pelayanan transportasi laut berdasarkan
                Standar Mutu Nasional dan Internasional <br />
                2. Menyelenggarakan penelitian dan kajian pengetahuan
                baru dibidang manajemen oprasi dan pelayanan
                transportasi laut sesuai kebutuhan bangsa dan dunia <br />
                3. Melaksanakan pelayanan pelatihan , konsultasi , dan
                memberikan masukan kepada pemerintah dan pelaku
                industri terhadap upaya untuk mengatasi maslalah
                transportasi laut lingkup nasional dan internasional
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
