import { useContext } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { shopContext } from "../context/shopContext";


function Navbar() {
  const { cartItems } = useContext(shopContext);
  const countIcon = cartItems?.reduce((sum, item) => sum + item.count, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
      <div className="container">
        <Link className="navbar-brand" to="/">☕ MyCafe</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <HashLink smooth to="/#contact" className="nav-link">
                ارتباط با ما
              </HashLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">درباره ما</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                {countIcon > 0 && (
                  <span className="badge rounded-pill bg-warning text-white ms-2">
                    {countIcon.toLocaleString("fa-IR")}
                  </span>
                )}
                سبد خرید
              </Link>
            </li>
            <li className="nav-item"><Link className="nav-link" to="/menu">منو</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/">خانه</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
