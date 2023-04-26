import DataCovid from "../components/DataCovid";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import Summary from "../components/Summary";

function Indonesian() {
  const URL = `https://covid19.mathdro.id/api/countries/indonesia`;
  const URL_IMAGE = `https://covid19.mathdro.id/api/countries/indonesia/og`;
  useEffect(async () => {
    Indonesia();
  }, []);
  async function Indonesia() {
    const response = await axios(URL);
    const responseOG = await axios(URL_IMAGE);
    // Simpan data di state
    setConfirmed(response.data.confirmed);
    setRecovered(response.data.recovered);
    setDeaths(response.data.deaths);
    setOG(...responseOG.data);
  }
  
  
  const [confirmed, setConfirmed] = useState([]);
  const [recovered, setRecovered] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [og, setOG] = useState([]);
  return (
    <>
      <Navbar/>
      <Header />
      <DataCovid title="Indonesia" confirmed={confirmed} recovered={recovered} deaths={deaths} />
      <Summary title="Indonesia" og={og} />
    </>
  );
}

export default Indonesian;
