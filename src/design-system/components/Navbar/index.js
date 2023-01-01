function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/#">
          New <span>Event</span>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/#">
                Intro
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Overview
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Speakers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Programs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Register
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Venue
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Sponsors
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
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
