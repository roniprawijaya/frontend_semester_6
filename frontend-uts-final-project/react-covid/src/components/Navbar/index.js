// import style from "./style.module.css";
import StyledNavbar from "./navbar.styled";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <StyledNavbar>
      <div>
        <nav>
          <div>
            <h1>Covid ID</h1>
          </div>
          <div>
            <ul>
              <li>
               <Link to="/" >Global</Link>
              </li>
              <li>
                <Link to="/indonesian">Indonesia</Link>
              </li>
              <li>
                <Link to="/provinsi">Provinsi</Link>
              </li>
              <li>About</li>
            </ul>
          </div>
        </nav>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
