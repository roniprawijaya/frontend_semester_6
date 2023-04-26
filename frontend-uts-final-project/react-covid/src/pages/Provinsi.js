import Form from "../components/Form";
import TableProvince from "../components/TableProvince";
import Provinces from "../utils/constants/provinces.js";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useState } from "react";

function Provinsi() {

  const [provinces, setProvinces] = useState(Provinces);
  return (
    <>
      <Navbar/>
      <Header />
      <TableProvince provinces={provinces} />
      <Form provinces={provinces} setProvinces={setProvinces} />
    </>
  );
}

export default Provinsi;
