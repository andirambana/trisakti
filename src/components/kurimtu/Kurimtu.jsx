import React from 'react'
import styled from "./kurimtu.css";
import Gambar1 from "../../img/kuri-mtu1.png";
import Gambar2 from "../../img/kuri-mtu2.png";
import Gambar3 from "../../img/kuri-mtu3.png";

export default function Kurimtu() {
  return (
    <div>
      <section id="kuri-mtu">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="card-title text-center">
                    Kurikulum Pendidikan <br/>
                    <span className="judul-kuri">Manajemen Transportasi Udara</span>
                  </div>
                  <div className="row">
                    <div className="col-md-12 mx-auto">
                        <img src={Gambar1} alt="" className="img-fluid mb-5" />
                    </div>
                    <div className="col-md-12 ms-auto">
                        <img src={Gambar2} alt="" className="img-fluid mb-5" />
                    </div>
                    <div className="col-md-12 ms-auto">
                        <img src={Gambar3} alt="" className="img-fluid" />
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
