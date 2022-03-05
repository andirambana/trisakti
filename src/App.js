import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/Landing";
import Mtu from "./components/Mtu";
import Mlm from "./components/Mlm";
import Mtl from "./components/Mtl";
import About from "./components/About";
import Direktur from "./components/Direktur";
import Tlm from "./components/Tlm";
import Organisasi from "./components/Organisasi";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Kkmtu from "./components/Kkmtu";
import Kkmtl from "./components/Kkmtl";
import Kkmlm from "./components/Kkmlm";
import ScrollTop from "./components/ScrollTop";
import Twitter from "./components/Twitter";
import Facebook from "./components/Facebook";
import Instagram from "./components/Instagram";
import Pendaftaran from "./components/Pendaftaran";
function App() {
  render(
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" exact element={<Landing />}></Route>
        <Route path="/manajemen-transportasi-udara" element={<Mtu />}></Route>
        <Route path="/manajemen-transportasi-laut" element={<Mtl />}></Route>
        <Route
          path="/manajemen-transportasi-logistik"
          element={<Mlm />}
        ></Route>
        <Route path="/tentang-kami" element={<About />}></Route>
        <Route path="/sambutan-direktur" element={<Direktur />}></Route>
        <Route path="/struktur-organisasi" element={<Organisasi />}></Route>
        <Route path="/tlm-vokasi" element={<Tlm />}></Route>
        <Route path="/kurikulum-mtu" element={<Kkmtu />}></Route>
        <Route path="/kurikulum-mtl" element={<Kkmtl />}></Route>
        <Route path="/kurikulum-mlm" element={<Kkmlm />}></Route>
        <Route path="/link-twitter" element={<Twitter />}></Route>
        <Route path="/link-facebook" element={<Facebook />}></Route>
        <Route path="/link-instagram" element={<Instagram />}></Route>
        <Route path="/link-pendaftaran" element={<Pendaftaran/>}></Route>
      </Routes>
    </BrowserRouter>,
    document.getElementById("root")
    // <>
    //   <Organisasi />
    // </>
  );
}

export default App;
