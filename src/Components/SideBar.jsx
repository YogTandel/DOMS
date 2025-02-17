import { useState } from "react";
import { Link } from "react-router-dom";

function SideBar() {
  // eslint-disable-next-line no-unused-vars
  const [isAdmin, setIsAdmin] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [activeView, setActiveView] = useState("dashboard");

  const handleDashboardActionChange = () => {
    setActiveView("dashboard");
    setIsAdmin(false);
  };

  const handleAdminActionChange = () => {
    setActiveView("admin");
    setIsAdmin(true);
  };

  return (
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
          <ul className="navbar-nav flex-column mb-3" id="navbarVerticalNav">
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
              <li className="nav-item">
                <a
                  className="nav-link dropdown-indicator"
                  href="#orders"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="e-commerce"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-text ps-1">Orders</span>
                  </div>
                </a>
                <ul className="nav collapse false" id="orders">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/orderList"
                      aria-expanded="false"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Order list</span>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/orderdetails"
                      aria-expanded="false"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Order details
                        </span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>
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
                      <span className="nav-link-text ps-1">Shopping cart</span>
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
                          <span className="nav-link-text ps-1">Register</span>
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
  );
}

export default SideBar;
