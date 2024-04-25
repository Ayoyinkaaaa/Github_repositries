import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h2><FaGithub /> Ayoyinkaaaa</h2>
      <nav>
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
      <button>Follow</button>
    </header>
  );
}
export default Header;
