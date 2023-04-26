import style from "./style.module.css";
import header from "../../assets/img/header.png";

function Header() {
  return (
    <div className={style.container}>
      <section className={style.hero}>
        <div className={style.hero__left}>
          <h2 className={style.hero__title}>Covid ID</h2>
          <h3 className={style.hero__genre}>
            Monitoring Perkembangan Covid
          </h3>
          <p className={style.hero__description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            cum accusamus quisquam earum velit ea nobis maiores exercitationem
            nam temporibus.
          </p>
          <button className={style.hero__button}>Vaccine</button>
        </div>
        <div className="hero__right">
          <img
            className={style.hero__image}
            src={header}
            alt="hero"
          />
        </div>
      </section>
    </div>
  );
}

export default Header;
