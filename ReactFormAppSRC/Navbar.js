import { NavLink } from "react-router-dom";
import Profile from "./Profile";
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark"  >
      <a className="navbar-brand logo" href="#">
        Scalent
      </a>
       <input type="checkbox" id="checkbox_toggle" />
             
      <label
        for="checkbox_toggle"
        className="hamburger"
        data-target="navbarText"
      >
        &#9776;
      </label>
      <div className="collapse navbar-collapse menu"  id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink style={{ color:"white"}}className="nav-link" to="/">
              Home{" "}
            </NavLink>
          </li>
        
        </ul>
        <form className="d-flex">

        </form>
      </div>
    </nav>
  );
}
export default Navbar;
