import React from "react";
import styled from "./prospekmlm.css";
import Prospek1 from "../../../img/prospek-mlm-1.png";
import Prospek2 from "../../../img/prospek-mlm-2.png";
import Prospek3 from "../../../img/prospek-mlm-3.png";
import Prospek4 from "../../../img/prospek-mlm-4.png";
import Prospek5 from "../../../img/prospek-mlm-5.png";
import Prospek6 from "../../../img/prospek-mlm-6.png";
import Prospek7 from "../../../img/prospek-mlm-7.png";
export default function ProspekMlm() {
  return (
    <div>
      <section id="prospek-mlm">
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
                  <div className="card-title">Pergudangan</div>
                </div>
              </div>
            </div>
            <div className="col-md-2 mx-auto">
              <div className="card">
                <div className="card-body text-center">
                  <img src={Prospek2} alt="" />
                  <div className="card-title">Wirausaha</div>
                </div>
              </div>
            </div>
            <div className="col-md-2 mx-auto">
              <div className="card">
                <div className="card-body text-center">
                  <img src={Prospek3} alt="" />
                  <div className="card-title">Distribusi</div>
                </div>
              </div>
            </div>
            <div className="col-md-2 mx-auto">
              <div className="card">
                <div className="card-body text-center">
                  <img src={Prospek4} alt="" />
                  <div className="card-title">E-Commerce</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 mx-auto">
              <div className="card">
                <div className="card-body text-center">
                  <img src={Prospek5} alt="" />
                  <div className="card-title">Retail</div>
                </div>
              </div>
            </div>
            <div className="col-md-2 mx-auto">
              <div className="card">
                <div className="card-body text-center">
                  <img src={Prospek6} alt="" />
                  <div className="card-title">Logistic</div>
                </div>
              </div>
            </div>
            <div className="col-md-2 mx-auto">
              <div className="card">
                <div className="card-body text-center">
                  <img src={Prospek7} alt="" />
                  <div className="card-title">Pengadaan Barang</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
