import React from "react";
import Gambar1 from "../../img/struktur1.png";
import Gambar2 from "../../img/struktur2.png";
import styled from "./struktur.css";

export default function TlmVokasi() {
  return (
    <div>
      <section id="struktur">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="card-title text-center">
                      Struktur Organisasi Vokasi
                    </div>
                    <img
                      src={Gambar1}
                      alt=""
                      className="img-fluid w-75 mb-5 mx-auto"
                    />
                    <div className="card-title text-center mt-5">
                      Direktorat Vokasi
                    </div>
                    <img src={Gambar2} alt="" className="img-fluid mx-auto" />
                  </div>
                  <span>
                    Keterangan : (urutan dari kiri ke kanan) 1. Kaprodi D3 MLM -
                    Dr. (Cand) Asep Ali Thabah, AMTrD, MMTr. 2. Direktur Vokasi
                    - Dr. (Cand) Yulianti Keke, SE, M.Si. 3. Kaprodi D3 MTU -
                    Dr. (Cand) Mustika Sari, MMTr. 4. Kaprodi D3 MTL - Dr.
                    (Cand) Reza Fauzi Jayasakti, SE, MMTr.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
