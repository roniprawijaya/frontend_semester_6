import Home from "./pages/Home";
import Indonesian from "./pages/Indonesian";
import Provinsi from "./pages/Provinsi";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      {/*
       * Render Halaman Home
       * Jika ingin diubah, maka ubah di Halaman Home.
       */}
      {/* <Layout> */}
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/indonesian" element={<Indonesian />} />
            <Route path="/provinsi" element={<Provinsi />} />
          </Routes>
        </BrowserRouter>
      {/* </Layout> */}
    </div>
  );
}

export default App;
