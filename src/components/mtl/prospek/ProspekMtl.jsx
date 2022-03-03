import React from "react";
import styled from "./prospekmtl.css";
import Prospek1 from "../../../img/prospek-mtl-1.png";
import Prospek2 from "../../../img/prospek-mtl-2.png";
import Prospek3 from "../../../img/prospek-mtl-3.png";
import Prospek4 from "../../../img/prospek-mtl-4.png";
import Prospek5 from "../../../img/prospek-mtl-5.png";
import Prospek6 from "../../../img/prospek-mtl-6.png";
export default function ProspekMtl() {
  return (
    <div>
      <section id="prospek-mtl">
        <div className="container">
          <div className="row text-center">
            <h1 className="prospek-h1">
              Prospek <span>Pekerjaan</span>{" "}
            </h1>
          </div>
          <div className="row">
            <div className="col-md-2 mx-auto">
              <div className="card">
                <div className="card-body text-center">
                  <img src={Prospek1} alt="" />
                  <div className="card-title">PT Pelni</div>
                </div>
              </div>
            </div>
            <div className="col-md-2 mx-auto">
              <div className="card">
                <div className="card-body text-center">
                  <img src={Prospek2} alt="" />
                  <div className="card-title">JICT</div>
                </div>
              </div>
            </div>
            <div className="col-md-2 mx-auto">
              <div className="card">
                <div className="card-body text-center">
                  <img src={Prospek3} alt="" />
                  <div className="card-title">IPC</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 mx-auto">
              <div className="card">
                <div className="card-body text-center">
                  <img src={Prospek4} alt="" />
                  <div className="card-title">Qantas Airlines</div>
                </div>
              </div>
            </div>
            <div className="col-md-2 mx-auto">
              <div className="card">
                <div className="card-body text-center">
                  <img src={Prospek5} alt="" />
                  <div className="card-title">Indonesia Ferry</div>
                </div>
              </div>
            </div>
            <div className="col-md-2 mx-auto">
              <div className="card">
                <div className="card-body text-center">
                  <img src={Prospek6} alt="" />
                  <div className="card-title">Car Terminal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
