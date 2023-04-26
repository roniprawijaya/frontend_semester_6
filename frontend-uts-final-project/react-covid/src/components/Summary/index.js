import style from "./style.module.css";
function Summary(props) {
const { og, title } = props;
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
          <h2 className={style.movies__title}>Summary</h2>
          <h2 className={style.movies__sub_title}>Summary Data {title}</h2>
            <img src={og}></img>
        </section>
    </div>
  );
}

export default Summary;
