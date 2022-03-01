import React from "react";
import styled from "./peminatanmtu.css";
export default function PeminatanMtu() {
  return (
    <div>
      <section id="peminatan-mtu">
        <div className="container">
          <div className="row">
            <div className="col-md-5 my-auto">
              <h1 className="peminatan-h1">Peminatan D3 Vokasi</h1>
              <h2 className="peminatan-h2">Manajemen Transportasi Udara</h2>
            </div>
            <div className="col-md-6 ms-auto">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Airline dan Travel Industry
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Peminatan ini menawarkan kurikulum yang match dengan
                      industry, dimana setiap mata kuliah di peminatan ini link
                      dengan dunia usaha airlines, khususnya di operasional
                      airport dalam penanganan penumpang, bagasi dan operation.
                      Sedangkan di bidang Travel industry mempelajari bagaimana
                      suatu industry pariwisata dijalankan. Contohnya membuat
                      produk pariwisata, mengelola event, meeting, conference.
                      Dengan program kampus merdeka, mahasiswa juga
                      berkesempatan magang di industry penerbangan dan travel
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Manajemen Bandar Udara
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Manajemen Bandar Udara adalah semua hal yang berhubungan
                      dengan pengelolaan bandara dan maskapai penerbangan.
                      Hal-hal yang dikelola antara lain adalah arus penumpang
                      dan lintasan pesawat, ditambah dengan keamanan, customer
                      service, kepatuhan terhadap peraturan penerbangan, bagasi
                      dan juga perekrutan pegawai. Selain masalah pengelolaan,
                      bidang ini juga mengatur strategi bandara dalam
                      mengumpulkan dan menyediakan informasi mengenai berbagai
                      prioritas komersial dan operasional untuk
                      maskapai-maskapai penerbangan.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Air Cargo
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Peminatan ini menawarkan kurikulum yang sangat dekat
                      industry, dimana trend saat ini adalah pengangkutan
                      barang, cargo dan pengelolaan gudang. Khususnya pada
                      pengelolaan Gudang (warehouse), export import, supply
                      chain, dan ground handling, sehingga mahasiswa mudah
                      memahami bagaimana nanti jika bekerja di industry cargo,
                      logistic dan ground handling.
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
