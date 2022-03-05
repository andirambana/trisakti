import React from 'react'
import styled from "./kurimlm.css";
import Gambar1 from "../../img/kuri-mlm1.png"
import Gambar2 from "../../img/kuri-mlm2.png"

export default function Kurimlm() {
  return (
    <div>
      <section id="kuri-mlm">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="card-title text-center">
                    Kurikulum Pendidikan <br/>
                    <span className="judul-kuri">Manajemen Logistik dan Material</span>
                  </div>
                  <div className="row">
                    <div className="col-md-12 mx-auto">
                        <img src={Gambar1} alt="" className="img-fluid mb-5" />
                    </div>
                    <div className="col-md-12 mx-auto">
                        <img src={Gambar2} alt="" className="img-fluid mb-5" />
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
