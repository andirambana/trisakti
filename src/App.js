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
function App() {
  return(
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" exact element={<Landing />}></Route>
    //     <Route path="/manajemen-transportasi-udara" element={<Mtu />}></Route>
    //     <Route path="/manajemen-transportasi-laut" element={<Mtl />}></Route>
    //     <Route
    //       path="/manajemen-transportasi-logistik"
    //       element={<Mlm />}
    //     ></Route>
    //     <Route path="/tentang-kami" element={<About />}></Route>
    //     <Route path="/sambutan-direktur" element={<Direktur />}></Route>
    //   </Routes>
    // </BrowserRouter>,
    // document.getElementById("root")
    <>
      <Organisasi />
    </>
    
  );
}

export default App;
