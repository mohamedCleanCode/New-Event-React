import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light position-fixed w-100">
      <div className="container">
        <a className="navbar-brand text-dark" href="/#">
          Ultra Profile
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-dark"
                aria-current="page"
                href="/#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/#">
                Work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/#">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/#">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/#">
                Sponsors
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
