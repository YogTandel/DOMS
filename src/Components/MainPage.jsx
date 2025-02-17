import { useState } from "react";
import { Link } from "react-router-dom";
import "./customepagination.css";
import Extra from "./Extra";
import Admin from "../Pages/Admin";
import ScheduleMenuForWeek from "../Pages/Menu List/ScheduleMenuForWeek";

function MainPage() {
  const [activeView, setActiveView] = useState("default");
  const [isMenu, setIsMenu] = useState(false);

  const handleAdminActionChange = () => {
    setActiveView("admin");
    setIsMenu(false);
  };

  const handleDashboardActionChange = () => {
    setActiveView("default"); // Ensure "default" is handled in the UI
    setIsMenu(false);
  };

  const handleMenuActionChange = (view) => {
    setActiveView(view);
    setIsMenu(false);
  };

  return (
    <div className="main" id="top">
      <div className="container-fluid" data-layout="container">
        <nav className="navbar navbar-light navbar-vertical navbar-expand-xl">
          <div className="d-flex align-items-center">
            <div className="toggle-icon-wrapper">
              <button
                className="btn navbar-toggler-humburger-icon navbar-vertical-toggle"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Toggle Navigation"
              >
                <span className="navbar-toggle-icon">
                  <span className="toggle-line" />
                </span>
              </button>
            </div>
            <Link className="navbar-brand" to="/dashboard">
              <div className="d-flex align-items-center py-3">
                <span className="font-sans-serif">Dashboard</span>
              </div>
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
            <div className="navbar-vertical-content scrollbar">
              <ul
                className="navbar-nav flex-column mb-3"
                id="navbarVerticalNav"
              >
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#dashboard"
                    onClick={handleDashboardActionChange}
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="dashboard"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <span className="fas fa-chart-pie" />
                      </span>
                      <span className="nav-link-text ps-1">Dashboard</span>
                    </div>
                  </a>
                  <a
                    className="nav-link"
                    href="#admin"
                    role="button"
                    onClick={handleAdminActionChange}
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="admin"
                  >
                    <span className="nav-link-text ps-1">Admin</span>
                  </a>
                  <a
                    className="nav-link dropdown-indicator"
                    href="#menus"
                    data-bs-toggle="collapse"
                    aria-expanded={isMenu ? "true" : "false"}
                    aria-controls="menuItems"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Menu Item</span>
                    </div>
                  </a>
                  {/* Dropdown Menu */}
                  <ul
                    className={`nav collapse ${isMenu ? "show" : ""}`}
                    id="menus"
                  >
                    {/* Schedule Menu For Week */}
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#menus"
                        role="button"
                        onClick={() => handleMenuActionChange("weekmenu")}
                        aria-expanded={
                          activeView === "weekmenu" ? "true" : "false"
                        }
                        aria-controls="weekmenu"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            Schedule Menu For Week
                          </span>
                        </div>
                      </a>
                    </li>

                    {/* Holiday Schedule */}
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#menus"
                        role="button"
                        onClick={() =>
                          handleMenuActionChange("holidayschedule")
                        }
                        aria-expanded={
                          activeView === "holidayschedule" ? "true" : "false"
                        }
                        aria-controls="holidayschedule"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            Holiday Schedule
                          </span>
                        </div>
                      </a>
                    </li>

                    {/* Today's Menu */}
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#menus"
                        role="button"
                        onClick={() => handleMenuActionChange("todaysmenu")}
                        aria-expanded={
                          activeView === "todaysmenu" ? "true" : "false"
                        }
                        aria-controls="todaysmenu"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            Today&apos;s Menu
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  {/* label*/}
                  <div className="row navbar-vertical-label-wrapper mt-3 mb-2">
                    <div className="col-auto navbar-vertical-label">App</div>
                    <div className="col ps-0">
                      <hr className="mb-0 navbar-vertical-divider" />
                    </div>
                  </div>
                  {/* parent pages*/}
                  <a
                    className="nav-link dropdown-indicator"
                    href="#e-commerce"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="e-commerce"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <span className="fas fa-shopping-cart" />
                      </span>
                      <span className="nav-link-text ps-1">Orders</span>
                    </div>
                  </a>
                  <ul className="nav collapse false" id="e-commerce">
                    <li className="nav-item">
                      <a
                        className="nav-link dropdown-indicator"
                        href="#product"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="e-commerce"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Product</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                      <ul className="nav collapse false" id="product">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="app/e-commerce/product/product-list.html"
                            aria-expanded="false"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Product list
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="app/e-commerce/product/product-grid.html"
                            aria-expanded="false"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Product grid
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="app/e-commerce/product/product-details.html"
                            aria-expanded="false"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Product details
                              </span>
                            </div>
                          </a>
                          {/* more inner pages*/}
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="app/e-commerce/customers.html"
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Customers</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="app/e-commerce/customer-details.html"
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            Customer details
                          </span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="app/e-commerce/shopping-cart.html"
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            Shopping cart
                          </span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="app/e-commerce/checkout.html"
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Checkout</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="app/e-commerce/billing.html"
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Billing</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="app/e-commerce/invoice.html"
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Invoice</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  {/* label*/}
                  <div className="row navbar-vertical-label-wrapper mt-3 mb-2">
                    <div className="col-auto navbar-vertical-label">Pages</div>
                    <div className="col ps-0">
                      <hr className="mb-0 navbar-vertical-divider" />
                    </div>
                  </div>
                  {/* parent pages*/}
                  <a
                    className="nav-link dropdown-indicator"
                    href="#authentication"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="authentication"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <span className="fas fa-lock" />
                      </span>
                      <span className="nav-link-text ps-1">Authentication</span>
                    </div>
                  </a>
                  <ul className="nav collapse false" id="authentication">
                    <li className="nav-item">
                      <a
                        className="nav-link dropdown-indicator"
                        href="#card"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="authentication"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Auth</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                      <ul className="nav collapse false" id="card">
                        <li className="nav-item">
                          <Link className="nav-link" to="/">
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Login</span>
                            </div>
                          </Link>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/logout">
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Logout</span>
                            </div>
                          </Link>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/register">
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Register
                              </span>
                            </div>
                          </Link>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/forgotpassword">
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Forgot password
                              </span>
                            </div>
                          </Link>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/confirmmail">
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Confirm mail
                              </span>
                            </div>
                          </Link>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/resetpassword">
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Reset password
                              </span>
                            </div>
                          </Link>
                          {/* more inner pages*/}
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/lockscreen">
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">
                                Lock screen
                              </span>
                            </div>
                          </Link>
                          {/* more inner pages*/}
                        </li>
                      </ul>
                    </li>
                  </ul>
                  {/* parent pages*/}
                  <a
                    className="nav-link dropdown-indicator"
                    href="#user"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="user"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <span className="fas fa-user" />
                      </span>
                      <span className="nav-link-text ps-1">User</span>
                    </div>
                  </a>
                  <ul className="nav collapse false" id="user">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="pages/user/profile.html"
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Profile</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="pages/user/settings.html"
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Settings</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  {/* label*/}
                  <div className="row navbar-vertical-label-wrapper mt-3 mb-2">
                    <div className="col-auto navbar-vertical-label">Logs</div>
                    <div className="col ps-0">
                      <hr className="mb-0 navbar-vertical-divider" />
                    </div>
                  </div>
                  <a
                    className="nav-link"
                    href="changelog.html"
                    role="button"
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <span className="fas fa-code-branch" />
                      </span>
                      <span className="nav-link-text ps-1">Log</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {activeView === "admin" && <Admin />}
        {activeView === "default" && <Extra />}
        {activeView === "weekmenu" && <ScheduleMenuForWeek />}
        
        <div
          className="modal fade"
          id="authentication-modal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="authentication-modal-label"
          aria-hidden="true"
        >
          <div className="modal-dialog mt-6" role="document">
            <div className="modal-content border-0">
              <div className="modal-header px-5 position-relative modal-shape-header bg-shape">
                <div className="position-relative z-index-1 light">
                  <h4
                    className="mb-0 text-white"
                    id="authentication-modal-label"
                  >
                    Register
                  </h4>
                  <p className="fs--1 mb-0 text-white">
                    Please create your free Falcon account
                  </p>
                </div>
                <button
                  className="btn-close btn-close-white position-absolute top-0 end-0 mt-2 me-2"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body py-4 px-5">
                <form>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="modal-auth-name">
                      Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      autoComplete="on"
                      id="modal-auth-name"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="modal-auth-email">
                      Email address
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      autoComplete="on"
                      id="modal-auth-email"
                    />
                  </div>
                  <div className="row gx-2">
                    <div className="mb-3 col-sm-6">
                      <label
                        className="form-label"
                        htmlFor="modal-auth-password"
                      >
                        Password
                      </label>
                      <input
                        className="form-control"
                        type="password"
                        autoComplete="on"
                        id="modal-auth-password"
                      />
                    </div>
                    <div className="mb-3 col-sm-6">
                      <label
                        className="form-label"
                        htmlFor="modal-auth-confirm-password"
                      >
                        Confirm Password
                      </label>
                      <input
                        className="form-control"
                        type="password"
                        autoComplete="on"
                        id="modal-auth-confirm-password"
                      />
                    </div>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="modal-auth-register-checkbox"
                    />
                    <label
                      className="form-label"
                      htmlFor="modal-auth-register-checkbox"
                    >
                      I accept the <a href="#!">terms </a>and{" "}
                      <a href="#!">privacy policy</a>
                    </label>
                  </div>
                  <div className="mb-3">
                    <button
                      className="btn btn-primary d-block w-100 mt-3"
                      type="submit"
                      name="submit"
                    >
                      Register
                    </button>
                  </div>
                </form>
                <div className="position-relative mt-5">
                  <hr className="bg-300" />
                  <div className="divider-content-center">or register with</div>
                </div>
                <div className="row g-2 mt-2">
                  <div className="col-sm-6">
                    <a
                      className="btn btn-outline-google-plus btn-sm d-block w-100"
                      href="#"
                    >
                      <span
                        className="fab fa-google-plus-g me-2"
                        data-fa-transform="grow-8"
                      />{" "}
                      google
                    </a>
                  </div>
                  <div className="col-sm-6">
                    <a
                      className="btn btn-outline-facebook btn-sm d-block w-100"
                      href="#"
                    >
                      <span
                        className="fab fa-facebook-square me-2"
                        data-fa-transform="grow-8"
                      />{" "}
                      facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
