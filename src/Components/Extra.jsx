import { Link, useNavigate } from "react-router-dom";
import DefaultPage from "./DefaultPage";

function Extra() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admins/signout", {
        method: "POST",
        credentials: "include",
      });

      const data = await response.json();

      if (data.success) {
        console.log("✅ Logout successful");
        localStorage.removeItem("role"); // Remove role from localStorage
        navigate("/logout"); // Redirect to login
      } else {
        console.error("❌ Logout failed:", data.message);
      }
    } catch (error) {
      console.error("❌ Error during logout:", error);
    }
  };
  return (
    <div className="content">
      <nav className="navbar navbar-light navbar-glass navbar-top navbar-expand">
        <button
          className="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarVerticalCollapse"
          aria-controls="navbarVerticalCollapse"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <span className="navbar-toggle-icon">
            <span className="toggle-line" />
          </span>
        </button>
        <a className="navbar-brand me-1 me-sm-3" href="index.html">
          <div className="d-flex align-items-center">
            <span className="font-sans-serif">Dashboard</span>
          </div>
        </a>
        <ul className="navbar-nav align-items-center d-none d-lg-block">
          <li className="nav-item">
            <div className="search-box" data-list='{"valueNames":["title"]}'>
              <form
                className="position-relative"
                data-bs-toggle="search"
                data-bs-display="static"
              >
                <input
                  className="form-control search-input fuzzy-search"
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                />
                <span className="fas fa-search search-box-icon" />
              </form>
              <div
                className="btn-close-falcon-container position-absolute end-0 top-50 translate-middle shadow-none"
                data-bs-dismiss="search"
              >
                <div className="btn-close-falcon" aria-label="Close" />
              </div>
              <div className="dropdown-menu border font-base start-0 mt-2 py-0 overflow-hidden w-100">
                <div
                  className="scrollbar list py-3"
                  style={{ maxHeight: "24rem" }}
                >
                  <h6 className="dropdown-header fw-medium text-uppercase px-card fs--2 pt-0 pb-2">
                    Recently Browsed
                  </h6>
                  <a
                    className="dropdown-item fs--1 px-card py-1 hover-primary"
                    href="app/events/event-detail.html"
                  >
                    <div className="d-flex align-items-center">
                      <span className="fas fa-circle me-2 text-300 fs--2" />
                      <div className="fw-normal title">
                        Pages{" "}
                        <span
                          className="fas fa-chevron-right mx-1 text-500 fs--2"
                          data-fa-transform="shrink-2"
                        />{" "}
                        Events
                      </div>
                    </div>
                  </a>
                  <a
                    className="dropdown-item fs--1 px-card py-1 hover-primary"
                    href="app/e-commerce/customers.html"
                  >
                    <div className="d-flex align-items-center">
                      <span className="fas fa-circle me-2 text-300 fs--2" />
                      <div className="fw-normal title">
                        E-commerce{" "}
                        <span
                          className="fas fa-chevron-right mx-1 text-500 fs--2"
                          data-fa-transform="shrink-2"
                        />{" "}
                        Customers
                      </div>
                    </div>
                  </a>
                  <hr className="bg-200 dark__bg-900" />
                  <h6 className="dropdown-header fw-medium text-uppercase px-card fs--2 pt-0 pb-2">
                    Suggested Filter
                  </h6>
                  <a
                    className="dropdown-item px-card py-1 fs-0"
                    href="app/e-commerce/customers.html"
                  >
                    <div className="d-flex align-items-center">
                      <span className="badge fw-medium text-decoration-none me-2 badge-soft-warning">
                        customers:
                      </span>
                      <div className="flex-1 fs--1 title">
                        All customers list
                      </div>
                    </div>
                  </a>
                  <a
                    className="dropdown-item px-card py-1 fs-0"
                    href="app/events/event-detail.html"
                  >
                    <div className="d-flex align-items-center">
                      <span className="badge fw-medium text-decoration-none me-2 badge-soft-success">
                        events:
                      </span>
                      <div className="flex-1 fs--1 title">
                        Latest events in current month
                      </div>
                    </div>
                  </a>
                  <a
                    className="dropdown-item px-card py-1 fs-0"
                    href="app/e-commerce/product/product-grid.html"
                  >
                    <div className="d-flex align-items-center">
                      <span className="badge fw-medium text-decoration-none me-2 badge-soft-info">
                        products:
                      </span>
                      <div className="flex-1 fs--1 title">
                        Most popular products
                      </div>
                    </div>
                  </a>
                  <hr className="bg-200 dark__bg-900" />
                  <h6 className="dropdown-header fw-medium text-uppercase px-card fs--2 pt-0 pb-2">
                    Files
                  </h6>
                  <a className="dropdown-item px-card py-2" href="#!">
                    <div className="d-flex align-items-center">
                      <div className="file-thumbnail me-2">
                        <img
                          className="border h-100 w-100 fit-cover rounded-3"
                          src="/img/products/3-thumb.png"
                          alt=""
                        />
                      </div>
                      <div className="flex-1">
                        <h6 className="mb-0 title">iPhone</h6>
                        <p className="fs--2 mb-0 d-flex">
                          <span className="fw-semi-bold">Antony</span>
                          <span className="fw-medium text-600 ms-2">
                            27 Sep at 10:30 AM
                          </span>
                        </p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item px-card py-2" href="#!">
                    <div className="d-flex align-items-center">
                      <div className="file-thumbnail me-2">
                        <img
                          className="img-fluid"
                          src="/img/icons/zip.png"
                          alt=""
                        />
                      </div>
                      <div className="flex-1">
                        <h6 className="mb-0 title">Falcon v1.8.2</h6>
                        <p className="fs--2 mb-0 d-flex">
                          <span className="fw-semi-bold">John</span>
                          <span className="fw-medium text-600 ms-2">
                            30 Sep at 12:30 PM
                          </span>
                        </p>
                      </div>
                    </div>
                  </a>
                  <hr className="bg-200 dark__bg-900" />
                  <h6 className="dropdown-header fw-medium text-uppercase px-card fs--2 pt-0 pb-2">
                    Members
                  </h6>
                  <a
                    className="dropdown-item px-card py-2"
                    href="pages/user/profile.html"
                  >
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-l status-online me-2">
                        <img
                          className="rounded-circle"
                          src="/img/team/1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="flex-1">
                        <h6 className="mb-0 title">Anna Karinina</h6>
                        <p className="fs--2 mb-0 d-flex">Technext Limited</p>
                      </div>
                    </div>
                  </a>
                  <a
                    className="dropdown-item px-card py-2"
                    href="pages/user/profile.html"
                  >
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-l me-2">
                        <img
                          className="rounded-circle"
                          src="/img/team/2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="flex-1">
                        <h6 className="mb-0 title">Antony Hopkins</h6>
                        <p className="fs--2 mb-0 d-flex">Brain Trust</p>
                      </div>
                    </div>
                  </a>
                  <a
                    className="dropdown-item px-card py-2"
                    href="pages/user/profile.html"
                  >
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-l me-2">
                        <img
                          className="rounded-circle"
                          src="/img/team/3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="flex-1">
                        <h6 className="mb-0 title">Emma Watson</h6>
                        <p className="fs--2 mb-0 d-flex">Google</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="text-center mt-n3">
                  <p className="fallback fw-bold fs-1 d-none">
                    No Result Found.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <ul className="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center">
          <li className="nav-item">
            <div className="theme-control-toggle fa-icon-wait px-2">
              <input
                className="form-check-input ms-0 theme-control-toggle-input"
                id="themeControlToggle"
                type="checkbox"
                data-theme-control="theme"
                defaultValue="dark"
              />
              <label
                className="mb-0 theme-control-toggle-label theme-control-toggle-light"
                htmlFor="themeControlToggle"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Switch to light theme"
              >
                <span className="fas fa-sun fs-0" />
              </label>
              <label
                className="mb-0 theme-control-toggle-label theme-control-toggle-dark"
                htmlFor="themeControlToggle"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Switch to dark theme"
              >
                <span className="fas fa-moon fs-0" />
              </label>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link px-0 notification-indicator notification-indicator-warning notification-indicator-fill fa-icon-wait"
              href="app/e-commerce/shopping-cart.html"
            >
              <span
                className="fas fa-shopping-cart"
                data-fa-transform="shrink-7"
                style={{ fontSize: 33 }}
              />
              <span className="notification-indicator-number">1</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link notification-indicator notification-indicator-primary px-0 fa-icon-wait"
              id="navbarDropdownNotification"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span
                className="fas fa-bell"
                data-fa-transform="shrink-6"
                style={{ fontSize: 33 }}
              />
            </a>
            <div
              className="dropdown-menu dropdown-menu-end dropdown-menu-card dropdown-menu-notification"
              aria-labelledby="navbarDropdownNotification"
            >
              <div className="card card-notification shadow-none">
                <div className="card-header">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-auto">
                      <h6 className="card-header-title mb-0">Notifications</h6>
                    </div>
                    <div className="col-auto ps-0 ps-sm-3">
                      <a className="card-link fw-normal" href="#">
                        Mark all as read
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="scrollbar-overlay"
                  style={{ maxHeight: "19rem" }}
                >
                  <div className="list-group list-group-flush fw-normal fs--1">
                    <div className="list-group-title border-bottom">NEW</div>
                    <div className="list-group-item">
                      <a
                        className="notification notification-flush notification-unread"
                        href="#!"
                      >
                        <div className="notification-avatar">
                          <div className="avatar avatar-2xl me-3">
                            <img
                              className="rounded-circle"
                              src="/img/team/1-thumb.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="notification-body">
                          <p className="mb-1">
                            <strong>Emma Watson</strong> replied to your comment
                            : &quot;Hello world 😍
                          </p>
                          <span className="notification-time">
                            <span
                              className="me-2"
                              role="img"
                              aria-label="Emoji"
                            >
                              💬
                            </span>
                            Just now
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="list-group-item">
                      <a
                        className="notification notification-flush notification-unread"
                        href="#!"
                      >
                        <div className="notification-avatar">
                          <div className="avatar avatar-2xl me-3">
                            <div className="avatar-name rounded-circle">
                              <span>AB</span>
                            </div>
                          </div>
                        </div>
                        <div className="notification-body">
                          <p className="mb-1">
                            <strong>Albert Brooks</strong> reacted to{" "}
                            <strong>Mia Khalifa&apos;s</strong> status
                          </p>
                          <span className="notification-time">
                            <span className="me-2 fab fa-gratipay text-danger" />
                            9hr
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="list-group-title border-bottom">
                      EARLIER
                    </div>
                    <div className="list-group-item">
                      <a className="notification notification-flush" href="#!">
                        <div className="notification-avatar">
                          <div className="avatar avatar-2xl me-3">
                            <img
                              className="rounded-circle"
                              src="/img/icons/weather-sm.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="notification-body">
                          <p className="mb-1">
                            The forecast today shows a low of 20℃ in California.
                            See today&apos;s weather.
                          </p>
                          <span className="notification-time">
                            <span
                              className="me-2"
                              role="img"
                              aria-label="Emoji"
                            >
                              🌤️
                            </span>
                            1d
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="list-group-item">
                      <a
                        className="border-bottom-0 notification-unread  notification notification-flush"
                        href="#!"
                      >
                        <div className="notification-avatar">
                          <div className="avatar avatar-xl me-3">
                            <img
                              className="rounded-circle"
                              src="/img/logos/oxford.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="notification-body">
                          <p className="mb-1">
                            <strong>University of Oxford</strong> created an
                            event : &quot;Causal Inference Hilary 2019
                          </p>
                          <span className="notification-time">
                            <span
                              className="me-2"
                              role="img"
                              aria-label="Emoji"
                            >
                              ✌️
                            </span>
                            1w
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="list-group-item">
                      <a
                        className="border-bottom-0 notification notification-flush"
                        href="#!"
                      >
                        <div className="notification-avatar">
                          <div className="avatar avatar-xl me-3">
                            <img
                              className="rounded-circle"
                              src="/img/team/10.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="notification-body">
                          <p className="mb-1">
                            <strong>James Cameron</strong> invited to join the
                            group: United Nations International Children&apos;s
                            Fund
                          </p>
                          <span className="notification-time">
                            <span
                              className="me-2"
                              role="img"
                              aria-label="Emoji"
                            >
                              🙋‍
                            </span>
                            2d
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-footer text-center border-top">
                  <a
                    className="card-link d-block"
                    href="app/social/notifications.html"
                  >
                    View all
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link pe-0"
              id="navbarDropdownUser"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="avatar avatar-xl">
                <img
                  className="rounded-circle"
                  src="img/bankks.png"
                  alt="Team"
                />
              </div>
            </a>
            <div
              className="dropdown-menu dropdown-menu-end py-0"
              aria-labelledby="navbarDropdownUser"
            >
              <div className="bg-white dark__bg-1000 rounded-2 py-2">
                <a className="dropdown-item fw-bold text-warning" href="#!">
                  <span>Change Admin Password</span>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#!">
                  Set status
                </a>
                <a className="dropdown-item" href="pages/user/profile.html">
                  Profile &amp; account
                </a>
                <a className="dropdown-item" href="#!">
                  Feedback
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="pages/user/settings.html">
                  Settings
                </a>
                <Link
                  className="dropdown-item"
                  onClick={handleLogout}
                  to="/logout"
                >
                  Logout
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <DefaultPage />
    </div>
  );
}

export default Extra;
