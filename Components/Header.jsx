import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineCloseCircle } from "react-icons/ai";


function Header() {
  const closeSidebar = () => document.querySelector('.Nav-mobile').style.display = 'none';
    const openSidebar = () => document.querySelector('.Nav-mobile').style.display = 'block';
  return (
    <header>
      <h2><FaGithub /> Ayoyinkaaaa</h2>
      <nav className="Nav-desktop">
        <ul>
          <li>
            <Link className="Link" to="/">Home</Link>
          </li>
          <li>
            <Link className="Link" to="/Repo">Respositories</Link>
          </li>
          <li>
          <Link className="Link" to="/Error"> 404 page</Link>
          </li>
        </ul>
      </nav>
      <button className="Nav-button">Follow</button>
      <RxHamburgerMenu onClick={openSidebar} className="openside-menu" />
      <nav className="Nav-mobile">
      <AiOutlineCloseCircle onClick={closeSidebar} className="closeside-menu" />
        <ul>
          <li>
            <Link className="Link" to="/">Home</Link>
          </li>
          <li>
            <Link className="Link" to="/Repo">Respositories</Link>
          </li>
          <li>
          <Link className="Link" to="/Error"> 404 page</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
