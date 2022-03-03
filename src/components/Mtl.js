import React from "react";
import Footer from "./footer/Footer";
import ProspekMtl from "./mtl/prospek/ProspekMtl";
import Navbar from "./navbar/Navbar";
import CarouselMtl from "./mtl/carousel/CarouselMtl";
import KurikulumMtl from "./mtl/kurikulum/KurikulumMtl";
import PeminatanMtl from "./mtl/peminatan/PeminatanMtl";
import ProfilMtl from "./mtl/profil/ProfilMtl";
import VisiMtl from "./mtl/visimisi/VisiMtl";
export default function Mtl() {
  return (
    <div>
      <Navbar />
      <CarouselMtl />
      <VisiMtl />
      <KurikulumMtl />
      <ProspekMtl />
      <PeminatanMtl />
      <ProfilMtl />
      <Footer />
    </div>
  );
}
