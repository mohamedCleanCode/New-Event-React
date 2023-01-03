import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark position-fixed w-100">
      <div className="container">
        <a className="navbar-brand text-light" href="/#">
          New <span className="text-danger">Event</span>
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
              <a className="nav-link active" aria-current="page" href="/#">
                Intro
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/#">
                Overview
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/#">
                Speakers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/#">
                Programs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/#">
                Register
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/#">
                Venue
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/#">
                Sponsors
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/#">
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
