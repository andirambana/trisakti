import React from "react";
import Footer from "./footer/Footer";
import Carousel from "./landing/carousel/Carousel";
import Faq from "./landing/faq/Faq";
import Kenapa from "./landing/kenapa/Kenapa";
import KerjasamaDalam from "./landing/kerjasamadalam/KerjasamaDalam";
import KerjasamaLuar from "./landing/kerjasamaluar/KerjasamaLuar";
import Media from "./landing/media/Media";
import Quotes from "./landing/quotes/Quotes";
import VisiMisi from "./landing/visimisi/VisiMisi";
import Vokasi from "./landing/vokasi/Vokasi";
import Navbar from "./navbar/Navbar";

export default function Landing() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Vokasi />
      <VisiMisi />
      <KerjasamaDalam />
      <KerjasamaLuar />
      <Kenapa />
      <Faq />
      <Media />
      <Quotes />
      <Footer />
    </div>
  );
}
