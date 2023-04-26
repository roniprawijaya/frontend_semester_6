import style from "./style.module.css";
import Alert from "../Alert";
import formImage from "../../assets/img/form-image.png";
import { updateProvinces } from "../../features/provincesSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Form(props) {
  const navigation = useNavigate();
  const dispatch = useDispatch();
    /**
   * Ini hanya snippet(potongan) code.
   * Kode yang lainnya tetap sama.
   */

  const { provinces, setProvinces } = props;

  const [status, setStatus] = useState("");
  const [province, setProvince] = useState("");
  const [jumlah, setJumlah] = useState("");

  const [isJumlahError, setIsJumlahError] = useState(false);
  const listProvinces = []

  for (const list of provinces.provinces.entries()) {
    listProvinces.push(<option value={list[1].kota}>{list[1].kota}</option>)
  }
  /**
   * Membuat fungsi handleTitle
   * Dijalankan ketika nilai input berubah
   */
   function handleProvince(e) {
        setProvince(e.target.value);
    }
    function handleStatus(e) {
        setStatus(e.target.value);
    }
  function handleJumlah(e) {
    /**
     * Jalankan fungsi setTitile.
     * Set title nilai baru: input saat ini.
     */
    setJumlah(e.target.value);
  }


    function handleSubmit(e) {
    e.preventDefault();

    if (jumlah === "") {
      setIsJumlahError(true);
    } else {
        let findProvince = 
        {
          jumlah: jumlah,
          provinces: province,
          status: status,
        }

        // let findProvince = provinces.provinces;
        
        // if (status === "Positif") {
        //     for (let i = 0; i < findProvince.length; i++) {
        //         if (findProvince[i].kota === province) {
        //             findProvince[i].kasus = findProvince[i].kasus + Number(jumlah);
        //             findProvince[i].positif = findProvince[i].positif  + Number(jumlah);
        //             break;
        //         }
        //     };
        // } else if (status === "Sembuh") {
        //   for (let i = 0; i < findProvince.length; i++) {
        //     if (findProvince[i].kota === province) {
        //         findProvince[i].kasus = findProvince[i].kasus - Number(jumlah);
        //         findProvince[i].sembuh = findProvince[i].sembuh  + Number(jumlah);
        //         break;
        //     }
        //   };
        // } else if (status === "Dirawat") {
        //   for (let i = 0; i < findProvince.length; i++) {
        //     if (findProvince[i].kota === province) {
        //         findProvince[i].kasus = findProvince[i].kasus + Number(jumlah);
        //         findProvince[i].dirawat = findProvince[i].dirawat  + Number(jumlah);
        //         break;
        //     }
        //   };
        // } else if (status === "Meninggal") {
        //   for (let i = 0; i < findProvince.length; i++) {
        //     if (findProvince[i].kota === province) {
        //         findProvince[i].kasus = findProvince[i].kasus + Number(jumlah);
        //         findProvince[i].meninggal = findProvince[i].meninggal  + Number(jumlah);
        //         break;
        //     }
        //   };
        // } 
        // let submit ={
        //     last_update: new Date(),
        //     total_province: 34, 
        //     provinces: findProvince,
        // }
        
        // setProvinces(submit);

        // let provincesALL = provinces.provinces;
        // console.log("find province", provincesALL);

        let payloadProvinces = findProvince.provinces;
            const index = provinces.provinces.findIndex((item) => item.kota === payloadProvinces);
            const foundProvince = provinces.provinces.find((item) => item.kota === payloadProvinces);
            
            provinces.provinces[index] = {
                ...foundProvince,

                [provinces.provinces.status]: parseInt(foundProvince[provinces.provinces.status]) + parseInt(findProvince.jumlah),
            }
        dispatch(updateProvinces(provinces.provinces));
        
        navigation("/provinsi");
      
        setIsJumlahError(false);
    }
  }
  return (
    <div className={style.container}>
      <section className={style.form}>
        <div className={style.form__left}>
        <img
            className={style.form__image}
            src={formImage}
            alt="form"
          />
        </div>
        <div className={style.form__right}>
          <h1 className={style.form__title}>Form Covid</h1>
          <form onSubmit={handleSubmit}>
            <div className={style.form__group}>
              <label htmlFor="province" className={style.form__label}>
                Provinsi
              </label>
                <select className={style.form__group} value={province} name="province" onChange={handleProvince}>
                    {listProvinces}
                </select>
            </div>
            <div className={style.form__group}>
              <label htmlFor="status" className={style.form__label}>
                Status
              </label>
                <select className={style.form__group} value={status} name="status" onChange={handleStatus}>
                    <option value="Sembuh">Sembuh</option>
                    <option value="Positif">Positif</option>
                    <option value="Dirawat">Dirawat</option>
                    <option value="Meninggal">Meninggal</option>
                </select>
            </div>
            <div className={style.form__group}>
              <label htmlFor="jumlah" className={style.form__label}>
                Jumlah
              </label>
              <input
                id="jumlah"
                className={style.form__input}
                type="number"
                name="jumlah"
                // Memberikan value input: date
                value={jumlah}
                // Memberikan event onChange
                onChange={handleJumlah}
              />
              {isJumlahError && <Alert>Jumlah Wajib Diisi</Alert>}
            </div>
            <div>
              <button className={style.form__button}>Submit</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Form;
