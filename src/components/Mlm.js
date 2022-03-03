import React from "react";
import Footer from "./footer/Footer";
import CarouselMlm from "./mlm/carousel/CarouselMlm";
import KurikulumMlm from "./mlm/kurikulum/KurikulumMlm";
import PeminatanMlm from "./mlm/peminatan/PeminatanMlm";
import ProfilMlm from "./mlm/profil/ProfilMlm";
import ProspekMlm from "./mlm/prospek/ProspekMlm";
import VisiMlm from "./mlm/visimisi/VisiMlm";
import Navbar from "./navbar/Navbar";

export default function Mlm() {
  return (
    <div>
      <Navbar />
      <CarouselMlm />
      <VisiMlm />
      <KurikulumMlm />
      <ProspekMlm />
      <PeminatanMlm />
      <ProfilMlm />
      <Footer />
    </div>
  );
}
