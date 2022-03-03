import React from "react";
import styled from "./kurikulummtl.css";
import Kurikulum1 from "../../../img/kurikulum-mtl1.png";
import Kurikulum2 from "../../../img/kurikulum-mtl2.png";
import Kurikulum3 from "../../../img/kurikulum-mtl3.png";
import Kurikulum4 from "../../../img/kurikulum-mtl4.png";
import Kurikulum5 from "../../../img/kurikulum-mtl5.png";
import Kurikulum6 from "../../../img/kurikulum-mtl6.png";
import Kurikulum7 from "../../../img/kurikulum-mtl7.png";
import Kurikulum8 from "../../../img/kurikulum-mtl8.png";
import Kurikulum9 from "../../../img/kurikulum-mtl9.png";
export default function Kurikulummtl() {
  return (
    <div>
      <section id="kurikulum-mtl">
        <div className="container">
          <div className="row text-center">
            <h1 className="kurikulum">Kurikulum Pendidikan</h1>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={Kurikulum1} alt="" /> &nbsp;{" "}
                  <span>Operasi Terminal Pelabuhan</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={Kurikulum2} alt="" /> &nbsp;{" "}
                  <span>Harbour Service</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={Kurikulum3} alt="" /> &nbsp;{" "}
                  <span>Shipping Agency</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={Kurikulum4} alt="" /> &nbsp; <span>Port State Control</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={Kurikulum5} alt="" /> &nbsp;{" "}
                  <span>Marine Cargo Insurance</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={Kurikulum6} alt="" /> &nbsp;{" "}
                  <span>Charter Practice</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={Kurikulum7} alt="" /> &nbsp;{" "}
                  <span>ISPS Coode</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={Kurikulum8} alt="" /> &nbsp; <span>Fleet Management</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={Kurikulum9} alt="" /> &nbsp;{" "}
                  <span>Crewing & HR Shipping Company</span>
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
