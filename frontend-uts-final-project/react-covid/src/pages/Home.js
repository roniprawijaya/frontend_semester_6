import DataCovid from "../components/DataCovid";
// import Indonesia from "../utils/constants/indonesia.js";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import Summary from "../components/Summary";

function Home() {
  const URL = `https://covid19.mathdro.id/api`;
  const URL_IMAGE = `https://covid19.mathdro.id/api/og`;
  useEffect(async () => {
    HomePage();
  }, []);
  async function HomePage() {
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
      <DataCovid title="Global" confirmed={confirmed} recovered={recovered} deaths={deaths} />
      <Summary title="Global" og={og} />
    </>
  );
}

export default Home;
