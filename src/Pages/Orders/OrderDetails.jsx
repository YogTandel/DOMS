import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import { useState } from "react";

function OrderDetails() {
  // eslint-disable-next-line no-unused-vars
  const [isAdmin, setIsAdmin] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [activeView, setActiveView] = useState("dashboard");
  const navigate = useNavigate();
  const handleDashboardActionChange = () => {
    setActiveView("dashboard");
    navigate("/dashboard");
  };

  const handleAdminActionChange = () => {
    setActiveView("admin");
    setIsAdmin(true);
  };

  const handelordersDetails = () => {
    setActiveView("ordersDetails");
    navigate("/orderdetails");
    
  };

  return (
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
                      <a
                        className="nav-link"
                        href="#ordersDetails"
                        role="button"
                        onClick={handelordersDetails}
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="ordersDetails"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            Order details
                          </span>
                        </div>
                      </a>
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
      <div className="content">
        <Navbar />
        <div className="card mb-3">
          <div
            className="bg-holder d-none d-lg-block bg-card"
            style={{
              backgroundImage:
                "url(/img/icons/spot-illustrations/corner-4.png)",
              opacity: "0.7",
            }}
          ></div>
          {/*/.bg-holder*/}
          <div className="card-body position-relative">
            <h5>Order Details: #2737</h5>
            <p className="fs--1">April 21, 2019, 5:33 PM</p>
            <div>
              <strong className="me-2">Status: </strong>
              <div className="badge rounded-pill badge-soft-success fs--2">
                Completed
                <span
                  className="fas fa-check ms-1"
                  data-fa-transform="shrink-2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <h5 className="mb-3 fs-0">Billing Address</h5>
                <h6 className="mb-2">Antony Hopkins</h6>
                <p className="mb-1 fs--1">
                  2393 Main Avenue
                  <br />
                  Penasauka, New Jersey 87896
                </p>
                <p className="mb-0 fs--1">
                  {" "}
                  <strong>Email: </strong>
                  <a href="mailto:ricky@gmail.com">antony@example.com</a>
                </p>
                <p className="mb-0 fs--1">
                  {" "}
                  <strong>Phone: </strong>
                  <a href="tel:7897987987">7897987987</a>
                </p>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <h5 className="mb-3 fs-0">Shipping Address</h5>
                <h6 className="mb-2">Antony Hopkins</h6>
                <p className="mb-0 fs--1">
                  2393 Main Avenue
                  <br />
                  Penasauka, New Jersey 87896
                </p>
                <div className="text-500 fs--1">(Free Shipping)</div>
              </div>
              <div className="col-md-6 col-lg-4">
                <h5 className="mb-3 fs-0">Payment Method</h5>
                <div className="d-flex">
                  <img
                    className="me-3"
                    src="../../../assets/img/icons/visa.png"
                    width={40}
                    height={30}
                    alt=""
                  />
                  <div className="flex-1">
                    <h6 className="mb-0">Antony Hopkins</h6>
                    <p className="mb-0 fs--1">**** **** **** 9809</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <div className="table-responsive fs--1">
              <table className="table table-striped border-bottom">
                <thead className="bg-200 text-900">
                  <tr>
                    <th className="border-0">Products</th>
                    <th className="border-0 text-center">Quantity</th>
                    <th className="border-0 text-end">Rate</th>
                    <th className="border-0 text-end">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-200">
                    <td className="align-middle">
                      <h6 className="mb-0 text-nowrap">
                        Platinum web hosting package9
                      </h6>
                      <p className="mb-0">Down 35mb, Up 100mb</p>
                    </td>
                    <td className="align-middle text-center">2</td>
                    <td className="align-middle text-end">$65.00</td>
                    <td className="align-middle text-end">$130.00</td>
                  </tr>
                  <tr className="border-200">
                    <td className="align-middle">
                      <h6 className="mb-0 text-nowrap">
                        2 Page website design
                      </h6>
                      <p className="mb-0">
                        Includes basic wireframes and responsive templates
                      </p>
                    </td>
                    <td className="align-middle text-center">1</td>
                    <td className="align-middle text-end">$2,100.00</td>
                    <td className="align-middle text-end">$2,100.00</td>
                  </tr>
                  <tr>
                    <td className="align-middle">
                      <h6 className="mb-0 text-nowrap">
                        Mobile App Development
                      </h6>
                      <p className="mb-0">Includes responsive navigation</p>
                    </td>
                    <td className="align-middle text-center">8</td>
                    <td className="align-middle text-end">$5,00.00</td>
                    <td className="align-middle text-end">$4,000.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row g-0 justify-content-end">
              <div className="col-auto">
                <table className="table table-sm table-borderless fs--1 text-end">
                  <tbody>
                    <tr>
                      <th className="text-900">Subtotal:</th>
                      <td className="fw-semi-bold">$6,230.00 </td>
                    </tr>
                    <tr>
                      <th className="text-900">Tax 5%:</th>
                      <td className="fw-semi-bold">$311.50</td>
                    </tr>
                    <tr className="border-top">
                      <th className="text-900">Total:</th>
                      <td className="fw-semi-bold">$6541.50</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default OrderDetails;
