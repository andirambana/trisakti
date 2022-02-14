import React from "react";
import styled from "./vokasi.css";
import Vokasi1 from "../../../img/vokasi1.png";
import Vokasi2 from "../../../img/vokasi2.png";
export default function Vokasi() {
  return (
    <div>
      <section id="vokasi">
        <div className="container">
          <div className="row mx-auto">
            <h2 className="vokasi-h2 text-center">Vokasi D3</h2>
            <h5 className="vokasi-h5 text-center">
              Institut Transportasi dan Logistik Trisakti
            </h5>
            <div className="col-md-10 mx-auto">
              <img src={Vokasi1} className="img-vokasi1 img-fluid" alt="" />
            </div>
            <div className="col-md-8 mx-auto">
              <img src={Vokasi2} className="img-vokasi2 img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
