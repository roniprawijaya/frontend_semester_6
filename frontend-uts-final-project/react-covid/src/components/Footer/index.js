import style from "./style.module.css";

function Footer() {
  return (
    <div className={style.container}>
      <nav className={style.navbar}>
        <div>
          <h1 className={style.navbar__brand}>Covid ID</h1>
          <h3 className={style.navbar__brand}>Developed by Toni</h3>
        </div>
        <div>
          <ul className={style.navbar__list}>
            <li className={style.navbar__item}>Global</li>
            <li className={style.navbar__item}>Indonesia</li>
            <li className={style.navbar__item}>Provinsi</li>
            <li className={style.navbar__item}>About</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
