import style from "./style.module.css";
function TableProvince(props) {
const { provinces } = props;
let listProvinces = [];
let no = 1;
for (const list of provinces.provinces.entries()) {
    listProvinces.push(<>
    <tr>
    <td>{no++}</td>
    <td>{list[1].kota}</td>
    <td>{list[1].positif}</td>
    <td>{list[1].sembuh}</td>
    <td>{list[1].dirawat}</td>
    <td>{list[1].meninggal}</td>
    </tr>
    </>)
}
  return (
    <div className={style.container}>
      <div className={style.container}>
        <section className={style.movies}>
          <h2 className={style.movies__title}>Provinsi</h2>
          <h2 className={style.movies__sub_title}>Data Covid Berdasarkan Provinsi</h2>
          <div className={style.movie__container}>
            <table className={style.table__style}>
                <tr className={style.table__style}>
                    <th className={style.font__table}>No</th>
                    <th className={style.font__table}>Provinsi</th>
                    <th className={style.font__table}>Positif</th>
                    <th className={style.font__table}>Sembuh</th>
                    <th className={style.font__table}>Dirawat</th>
                    <th className={style.font__table}>Meninggal</th>
                </tr>
                  {listProvinces}
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TableProvince;
