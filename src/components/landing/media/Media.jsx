import React from "react";
import styled from "./media.css";
export default function Media() {
  return (
    <div>
      <section id="media">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-5 me-auto my-auto">
              <h5 className="media-h5">ITL Trisakti On Media</h5>
              <p className="media-p">
                Media pembelajaran yang dikembangkan oleh TIM PUBDOK ITL
                Trisakti yang bertujuan untuk berkontribusi dalam dunia
                pendidikan khususnya dalam mencerdaskan kehidupan bangsa sesuai
                yang tertuang pada pembukaan UUD 1945 Republik Indonesia. Untuk
                mengunjungi media trisakti dapat <a href="">klik disini</a>
              </p>
            </div>
            <div className="col-md-5 ms-auto text-center">
              <iframe
                src="https://www.youtube.com/embed/sB_tQrQoIeE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
