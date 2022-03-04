import React from 'react'
import Gambar1 from "../../img/struktur1.png";
import Gambar2 from "../../img/struktur2.png";
import styled from "./struktur.css";

export default function TlmVokasi() {
  return (
    <div>
        <section id="tlm">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="card-title text-center">
                            Struktur Organisasi Vokasi
                        </div>
                            <img src={Gambar1} alt="" className="img-fluid w-75 mb-5 mx-auto"/>
                        <div className="card-title text-center mt-5">
                            Direktorat Vokasi
                        </div>
                            <img src={Gambar2} alt="" className="img-fluid mx-auto"/>
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
