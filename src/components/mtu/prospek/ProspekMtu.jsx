import React from "react";
import styled from "./prospekmtu.css";
import Prospek1 from "../../../img/prospek-mtu-1.png";
import Prospek2 from "../../../img/prospek-mtu-2.png";
import Prospek3 from "../../../img/prospek-mtu-3.png";
import Prospek4 from "../../../img/prospek-mtu-4.png";
import Prospek5 from "../../../img/prospek-mtu-5.png";
import Prospek6 from "../../../img/prospek-mtu-6.png";
export default function ProspekMtu() {
  return (
    <div>
      <section id="prospek-mtu">
        <div className="container">
          <div className="row text-center">
            <h1 className="prospek-h1">
              Prospek <span>Pekerjaan</span>{" "}
            </h1>
          </div>
          <div className="row">
            <div className="col-md-3 me-auto">
              <div className="card">
                <div className="card-body text-center">
                  <img src={Prospek1} alt="" />
                  <div className="card-title">Airline</div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mx-auto">
              <div className="card">
                <div className="card-body text-center">
                  <img src={Prospek2} alt="" />
                  <div className="card-title">Air Travel Industry</div>
                </div>
              </div>
            </div>
            <div className="col-md-3 ms-auto">
              <div className="card">
                <div className="card-body text-center">
                  <img src={Prospek3} alt="" />
                  <div className="card-title">Air Travel Industry</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 me-auto">
              <div className="card">
                <div className="card-body text-center">
                  <img src={Prospek4} alt="" />
                  <div className="card-title">Air Cargo</div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mx-auto">
              <div className="card">
                <div className="card-body text-center">
                  <img src={Prospek5} alt="" />
                  <div className="card-title">Ground Handling</div>
                </div>
              </div>
            </div>
            <div className="col-md-3 ms-auto">
              <div className="card">
                <div className="card-body text-center">
                  <img src={Prospek6} alt="" />
                  <div className="card-title">Wirausaha</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
