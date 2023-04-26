import style from "./style.module.css";
function DataCovid(props) {
const { confirmed, recovered, deaths, title } = props;
// let listData = [];
// for (const list of data.entries()) {
//     listData.push(<>
//     <div className={style.movie__container}>
//         <a href={list.detail}>
//             <div className={style.movie}>        
//                 <h3 className={style.movie__title}>{list[1].status}</h3>
//                 <p className={style.movie__date}>{list[1].total}</p> 
//             </div>
//         </a>
//     </div>
//     </>)
// }
  return (
    <div className={style.container}>
        <section className={style.movies}>
          <h2 className={style.movies__title}>{title}</h2>
          <h2 className={style.movies__sub_title}>Data Covid Berdasarkan {title}</h2>
          <div className={style.movie__container}>
            <a href={confirmed.detail}>
                <div className={style.movie}>        
                    <h3 className={style.movie__title}>Confirmed</h3>
                    <p className={style.movie__date}>{confirmed.value}</p> 
                </div>
              </a>
          </div>
          <div className={style.movie__container}>
            <a href={recovered.detail}>
                <div className={style.movie}>        
                    <h3 className={style.movie__title}>Recovered</h3>
                    <p className={style.movie__date}>{recovered.value}</p> 
                </div>
              </a>
          </div>
          <div className={style.movie__container}>
            <a href={deaths.detail}>
                <div className={style.movie}>        
                    <h3 className={style.movie__title}>Deaths</h3>
                    <p className={style.movie__date}>{deaths.value}</p> 
                </div>
              </a>
          </div>
        </section>
    </div>
  );
}

export default DataCovid;
