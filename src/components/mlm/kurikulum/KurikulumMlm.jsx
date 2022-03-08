import React from "react";
import styled from "./kurikulummlm.css";
import Kurikulum1 from "../../../img/kurikulum-mlm1.png";
import Kurikulum2 from "../../../img/kurikulum-mlm2.png";
import Kurikulum3 from "../../../img/kurikulum-mlm3.png";
import Kurikulum4 from "../../../img/kurikulum-mlm4.png";
import Kurikulum5 from "../../../img/kurikulum-mlm5.png";
import Kurikulum6 from "../../../img/kurikulum-mlm6.png";
import Kurikulum7 from "../../../img/kurikulum-mlm7.png";
import Kurikulum9 from "../../../img/kurikulum-mlm9.png";
import Kurikulum10 from "../../../img/kurikulum-mlm10.png";
import Kurikulum11 from "../../../img/kurikulum-mlm11.png";
import Kurikulumx from "../../../img/kurikulum-mtu1.png";
import { Link } from "react-router-dom";
export default function KurikulumMlm() {
  return (
    <div>
      <section id="kurikulum-mlm">
        <div className="container">
          <div className="row text-center">
            <h1 className="kurikulum">Kurikulum Pendidikan</h1>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={Kurikulum1} alt="" /> &nbsp;{" "}
                  <span>Supply Chain Management</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={Kurikulum2} alt="" /> &nbsp;{" "}
                  <span>Manajemen Logistik</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={Kurikulum3} alt="" /> &nbsp;{" "}
                  <span>Manajemen Asset</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={Kurikulum4} alt="" /> &nbsp; <span>E-Commerce</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={Kurikulum5} alt="" /> &nbsp;{" "}
                  <span>Manajemen Retail</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={Kurikulum6} alt="" /> &nbsp;{" "}
                  <span>Manajemen Distribusi</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={Kurikulum7} alt="" /> &nbsp;{" "}
                  <span>Manajemen Mutu</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={Kurikulumx} alt="" /> &nbsp; <span>Kaizen</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={Kurikulum9} alt="" /> &nbsp;{" "}
                  <span>Procurement Management</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={Kurikulum10} alt="" /> &nbsp;{" "}
                  <span>Logistik Peralatan Industri</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={Kurikulum11} alt="" /> &nbsp;{" "}
                  <span>Managemen Pergudangan</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={Kurikulumx} alt="" /> &nbsp;{" "}
                  <span>Reverse Logistic</span>
                </div>
              </div>
            </div>
          </div>
          <center>
            <Link to="/kurikulum-mlm">
              <button type="button" class="btn btn-primary btn-kurikulum mx-auto">
                Selengkapnya
              </button>
            </Link>
          </center>
        </div>
      </section>
    </div>
  );
}
