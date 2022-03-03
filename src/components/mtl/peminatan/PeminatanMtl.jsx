import React from "react";
import styled from "./peminatanmtl.css";
import Peminatan1 from "../../../img/peminatan-mtl1.png";
import Peminatan2 from "../../../img/peminatan-mtl2.png";
export default function PeminatanMtl() {
  return (
    <div>
      <section id="peminatan-mtl">
        <div className="container">
          <div className="row text-center">
            <h1 className="peminatan-h1">Peminatan D3 Vokasi</h1>
            <h2 className="peminatan-h2">Manajemen Transportasi Laut</h2>
          </div>
          <div className="row">
            <div className="col-md-3 mx-auto">
              <div className="card">
                <img src={Peminatan1} alt="" />
                <div className="card-body">
                  <div className="card-text mx-auto">Port Management</div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mx-auto">
              <div className="card">
                <img src={Peminatan2} alt="" />
                <div className="card-body">
                  <div className="card-text mx-auto">Shipping Management</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
