import React from "react";
import styled from "./peminatanmlm.css";
import Peminatan1 from "../../../img/peminatan-mlm1.png";
import Peminatan2 from "../../../img/peminatan-mlm2.png";
export default function PeminatanMlm() {
  return (
    <div>
      <section id="peminatan-mlm">
        <div className="container">
          <div className="row text-center">
            <h1 className="peminatan-h1">Peminatan D3 Vokasi</h1>
            <h2 className="peminatan-h2">Manajemen Logistik dan Material</h2>
          </div>
          <div className="row">
            <div className="col-md-3 mx-auto">
              <div className="card">
                <img src={Peminatan1} alt="" />
                <div className="card-body">
                  <div className="card-text mx-auto">Retail Management</div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mx-auto">
              <div className="card">
                <img src={Peminatan2} alt="" />
                <div className="card-body">
                  <div className="card-text mx-auto">Warehouse Management</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
