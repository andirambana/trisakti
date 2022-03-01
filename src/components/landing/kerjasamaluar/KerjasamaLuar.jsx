import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "./kerjasamaluar.css";
import Dalam1 from "../../../img/luarnegeri1.png";
import Dalam2 from "../../../img/luarnegeri2.png";
import Dalam3 from "../../../img/luarnegeri3.png";
import Dalam4 from "../../../img/luarnegeri4.png";
import Dalam5 from "../../../img/luarnegeri5.png";
import Dalam6 from "../../../img/luarnegeri6.png";
import Dalam7 from "../../../img/luarnegeri7.png";
import Dalam8 from "../../../img/luarnegeri8.png";
import Dalam9 from "../../../img/luarnegeri9.png";
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
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}
