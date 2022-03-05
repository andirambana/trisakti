import React from 'react'
import styled from "./kurimtl.css";
import Gambar1 from "../../img/kuri-mtl1.png";
import Gambar2 from "../../img/kuri-mtl2.png";
import Gambar3 from "../../img/kuri-mtl3.png";
import Gambar4 from "../../img/kuri-mtl4.png";


export default function Kurimtl() {
  return (
    <div>
      <section id="kuri-mtl">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="card-title text-center">
                    Kurikulum Pendidikan <br/>
                    <span className="judul-kuri">Manajemen Transportasi Laut</span>
                  </div>
                  <div className="row">
                    <div className="col-md-12 mx-auto">
                        <img src={Gambar1} alt="" className="img-fluid mb-5" />
                    </div>
                    <div className="col-md-12 mx-auto">
                        <img src={Gambar2} alt="" className="img-fluid mb-5" />
                    </div>
                  </div>
                  <div className="card-title text-center">
                    Komposisi Mata Kuliah <br/>
                    <span className="judul-kuri">Manajemen Transportasi Laut</span>
                  </div>
                  <div className="row">
                    <div className="col-md-8 mx-auto mt-5">
                        <img src={Gambar3} alt="" className="img-fluid mb-5" />
                    </div>
                    <div className="col-md-4 mx-auto">
                        <img src={Gambar4} alt="" className="img-fluid mb-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
