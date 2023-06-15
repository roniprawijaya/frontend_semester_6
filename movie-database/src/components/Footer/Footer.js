/**
 * Import CSS Module Footer.
 * Disimpan di object styles.
 */
// import styles from "./Footer.module.css";
import StyledFooter from "./Footer.styled";

function Footer() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <StyledFooter>
      <div>
        <footer>
          <h2>Movie App</h2>
          <p>Created by toniyansyah4</p>
        </footer>
      </div>
    </StyledFooter>
  );
}

export default Footer;
