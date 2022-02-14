import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "./kerjasamadalam.css";
import Dalam1 from "../../../img/dalamnegeri1.png";
import Dalam2 from "../../../img/dalamnegeri2.png";
import Dalam3 from "../../../img/dalamnegeri3.png";
import Dalam4 from "../../../img/dalamnegeri4.png";
import Dalam5 from "../../../img/dalamnegeri5.png";
import Dalam6 from "../../../img/dalamnegeri6.png";
import Dalam7 from "../../../img/dalamnegeri7.png";
export default function KerjasamaDalam() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
              <span>Universitas dan Perusahaan Dalam Negeri</span>
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
            </Slider>
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
}
