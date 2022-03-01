import React from "react";
import styled from "./kurikulum.css";
import Kurikulum1 from "../../../img/kurikulum-mtu1.png";
import Kurikulum2 from "../../../img/kurikulum-mtu2.png";
import Kurikulum3 from "../../../img/kurikulum-mtu3.png";
import Kurikulum4 from "../../../img/kurikulum-mtu4.png";
import Kurikulum5 from "../../../img/kurikulum-mtu5.png";
import Kurikulum6 from "../../../img/kurikulum-mtu6.png";
import Kurikulum7 from "../../../img/kurikulum-mtu7.png";
import Kurikulum8 from "../../../img/kurikulum-mtu8.png";
import Kurikulum9 from "../../../img/kurikulum-mtu9.png";
export default function Kurikulum() {
  return (
    <div>
      <section id="kurikulum">
        <div className="container">
          <div className="row text-center">
            <h1 className="kurikulum">Kurikulum Pendidikan</h1>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={Kurikulum1} alt="" /> &nbsp;{" "}
                  <span>Tourism Geography</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={Kurikulum2} alt="" /> &nbsp;{" "}
                  <span>Supply Chain Management</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={Kurikulum3} alt="" /> &nbsp;{" "}
                  <span>Dangerous Goods</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={Kurikulum4} alt="" /> &nbsp;{" "}
                  <span>Ground Operation</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={Kurikulum5} alt="" /> &nbsp;{" "}
                  <span>Freight Forwarding</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={Kurikulum6} alt="" /> &nbsp;{" "}
                  <span>Export & Import Management</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={Kurikulum7} alt="" /> &nbsp;{" "}
                  <span>Airport Management</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={Kurikulum8} alt="" /> &nbsp;{" "}
                  <span>Flight Operation</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={Kurikulum9} alt="" /> &nbsp;{" "}
                  <span>Airline Bussines Management</span>
                </div>
              </div>
            </div>
          </div>
          <center>
            <button type="button" class="btn btn-primary btn-kurikulum mx-auto">
              Selengkapnya
            </button>
          </center>
        </div>
      </section>
    </div>
  );
}
