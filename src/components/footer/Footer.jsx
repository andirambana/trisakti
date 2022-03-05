import React from "react";
import Logo from "../../img/logo-footer.png";
import Socmed from "../../img/ig.png";
import Socmed1 from "../../img/twitter.png";
import Socmed2 from "../../img/fb.png";
import Socmed3 from "../../img/email.png";
import styled from "./footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-5">
              <img src={Logo} alt="" />
              <p className="footer-p">
                Jl. IPN Kebon Nanas No.2, RT.9/RW.6, Cipinang Besar Sel.,
                Kecamatan Jatinegara, Kota Jakarta Timur, Daerah Khusus Ibukota
                Jakarta 13410
              </p>
            </div>
            <div className="col-md-3 mx-auto mb-5">
              <h5 className="footer-h5">Program Studi</h5>
              <Link to="/manajemen-transportasi-logistik" className="link-a">
                Manajemen Logistik dan Material
              </Link>{" "}
              <br />
              <Link to="/manajemen-transportasi-laut" className="link-a">
                Manajemen Transportasi Laut
              </Link>{" "}
              <br />
              <Link to="/manajemen-transportasi-udara" className="link-a">
                Manajemen Transportasi Udara
              </Link>
            </div>
            <div className="col-md-2 mx-auto mb-5">
              <h5 className="footer-h5">Kontak Kami</h5>
              <p className="kontak-p">
                <img src={Socmed} alt="" />
                &nbsp; @itl_trisakti_
              </p>
              <p className="kontak-p">
                <img src={Socmed1} alt="" />
                &nbsp; @itl_trisakti_
              </p>
              <p className="kontak-p">
                <img src={Socmed2} alt="" />
                &nbsp; ITL_Trisaksi
              </p>
              <p className="kontak-p">
                <img src={Socmed3} alt="" />
                &nbsp; example@itl.ac.id
              </p>
            </div>
            <div className="col-md-2 ms-auto">
              <h5 className="footer-h5">Pendaftaran</h5>
              <a href="" className="link-a">
                Diploma
              </a>
              <br />
              <a href="" className="link-a">
                Sarjana
              </a>
              <br />
              <a href="" className="link-a">
                Pascasarjana
              </a>
            </div>
          </div>
          <hr />
          <div className="row text-center">
            <p className="akhir-p">
              Hak Cipta © 2022 Program Vokasi Institut Transportasi dan Logistik
              Trisakti
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
