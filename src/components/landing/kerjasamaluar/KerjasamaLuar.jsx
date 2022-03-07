import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "./kerjasamaluar.css";
import Dalam1 from "../../../img/luar-negeri-1.png";
import Dalam2 from "../../../img/luar-negeri-2.png";
import Dalam3 from "../../../img/luar-negeri-3.png";
import Dalam4 from "../../../img/luar-negeri-4.png";
import Dalam5 from "../../../img/luar-negeri-5.png";
import Dalam6 from "../../../img/luar-negeri-6.png";
import Dalam7 from "../../../img/luar-negeri-7.png";
import Dalam8 from "../../../img/luar-negeri-8.png";
import Dalam9 from "../../../img/luar-negeri-9.png";
import Dalam10 from "../../../img/luar-negeri-10.png";
import Dalam11 from "../../../img/luar-negeri-11.png";
import Dalam12 from "../../../img/luar-negeri-12.png";
import Dalam13 from "../../../img/luar-negeri-13.png";
import Dalam14 from "../../../img/luar-negeri-14.png";
import Dalam15 from "../../../img/luar-negeri-15.png";
import Dalam16 from "../../../img/luar-negeri-16.png";
import Dalam17 from "../../../img/luar-negeri-17.png";
import Dalam18 from "../../../img/luar-negeri-18.png";
import Dalam19 from "../../../img/luar-negeri-19.png";
import Dalam20 from "../../../img/luar-negeri-20.png";
import Dalam21 from "../../../img/luar-negeri-21.png";
import Dalam22 from "../../../img/luar-negeri-22.png";
import Dalam23 from "../../../img/luar-negeri-23.png";
import Dalam24 from "../../../img/luar-negeri-24.png";
import Dalam25 from "../../../img/luar-negeri-25.png";

export default function KerjasamaLuar() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <section id="kerjasamadalam">
        <div className="container">
          <div className="row text-center">
            <h5 className="kerjasamadalam-h5">
              Kerjasama Dengan{" "}
              <span>Universitas dan Perusahaan Luar Negeri</span>
            </h5>
            <Slider {...settings}>
              <div>
                <img src={Dalam1} alt="" />
              </div>
              <div>
                <img src={Dalam2} alt="" />
              </div>
              <div>
                <img src={Dalam3} alt="" />
              </div>
              <div>
                <img src={Dalam4} alt="" />
              </div>
              <div>
                <img src={Dalam5} alt="" />
              </div>
              <div>
                <img src={Dalam6} alt="" />
              </div>
              <div>
                <img src={Dalam7} alt="" />
              </div>
              <div>
                <img src={Dalam8} alt="" />
              </div>
              <div>
                <img src={Dalam9} alt="" />
              </div>
              <div>
                <img src={Dalam10} alt="" />
              </div>
              <div>
                <img src={Dalam11} alt="" />
              </div>
              <div>
                <img src={Dalam12} alt="" />
              </div>
              <div>
                <img src={Dalam13} alt="" />
              </div>
              <div>
                <img src={Dalam14} alt="" />
              </div>
              <div>
                <img src={Dalam15} alt="" />
              </div>
              <div>
                <img src={Dalam16} alt="" />
              </div>
              <div>
                <img src={Dalam17} alt="" />
              </div>
              <div>
                <img src={Dalam18} alt="" />
              </div>
              <div>
                <img src={Dalam19} alt="" />
              </div>
              <div>
                <img src={Dalam20} alt="" />
              </div>
              <div>
                <img src={Dalam21} alt="" />
              </div>
              <div>
                <img src={Dalam22} alt="" />
              </div>
              <div>
                <img src={Dalam23} alt="" />
              </div>
              <div>
                <img src={Dalam24} alt="" />
              </div>
              <div>
                <img src={Dalam25} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}
