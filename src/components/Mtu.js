import React from "react";
import Footer from "./footer/Footer";
import CarouselMtu from "./mtu/carousel/CarouselMtu";
import Kurikulum from "./mtu/kurikulum/Kurikulum";
import PeminatanMtu from "./mtu/peminatan/PeminatanMtu";
import ProfilMtu from "./mtu/profil/ProfilMtu";
import ProspekMtu from "./mtu/prospek/ProspekMtu";
import Visimtu from "./mtu/visimisi/Visimtu";
import Navbar from "./navbar/Navbar";

export default function Mtu() {
  return (
    <div>
      <Navbar />
      <CarouselMtu />
      <Visimtu />
      <Kurikulum />
      <ProspekMtu />
      <PeminatanMtu />
      <ProfilMtu />
      <Footer />
    </div>
  );
}
