import Footer from "./Footer";

function DefaultPage() {
  return (
    <div className="content">
      <div className="row g-3 mb-3">
        <div className="col-xxl-6 col-xl-12">
          <div className="row g-3">
            <div className="col-12">
              <div className="card bg-transparent-50 overflow-hidden">
                <div className="card-header position-relative">
                  <div
                    className="bg-holder d-none d-md-block bg-card z-index-1"
                    style={{
                      backgroundImage:
                        "url(../assets/img/illustrations/ecommerce-bg.png)",
                      backgroundSize: 230,
                      backgroundPosition: "right bottom",
                      zIndex: -1,
                    }}
                  ></div>
                  {/*/.bg-holder*/}
                  <div className="position-relative z-index-2">
                    <div>
                      <h3 className="text-primary mb-1">
                        Good Afternoon, Jonathan!
                      </h3>
                      <p>Here’s what happening with your store today </p>
                    </div>
                    <div className="d-flex py-3">
                      <div className="pe-3">
                        <p className="text-600 fs--1 fw-medium">
                          Today&apos;s visit{" "}
                        </p>
                        <h4 className="text-800 mb-0">14,209</h4>
                      </div>
                      <div className="ps-3">
                        <p className="text-600 fs--1">Today’s total sales </p>
                        <h4 className="text-800 mb-0">$21,349.29 </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <ul className="mb-0 list-unstyled">
                    <li className="alert mb-0 rounded-0 py-3 px-card alert-warning border-x-0 border-top-0">
                      <div className="row flex-between-center">
                        <div className="col">
                          <div className="d-flex">
                            <div className="fas fa-circle mt-1 fs--2" />
                            <p className="fs--1 ps-2 mb-0">
                              <strong>5 products</strong> didn’t publish to your
                              Facebook page
                            </p>
                          </div>
                        </div>
                        <div className="col-auto d-flex align-items-center">
                          <a className="alert-link fs--1 fw-medium" href="#!">
                            View products
                            <i className="fas fa-chevron-right ms-1 fs--2" />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="alert mb-0 rounded-0 py-3 px-card greetings-item border-top border-x-0 border-top-0">
                      <div className="row flex-between-center">
                        <div className="col">
                          <div className="d-flex">
                            <div className="fas fa-circle mt-1 fs--2 text-primary" />
                            <p className="fs--1 ps-2 mb-0">
                              <strong>7 orders</strong> have payments that need
                              to be captured
                            </p>
                          </div>
                        </div>
                        <div className="col-auto d-flex align-items-center">
                          <a className="alert-link fs--1 fw-medium" href="#!">
                            View payments
                            <i className="fas fa-chevron-right ms-1 fs--2" />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="alert mb-0 rounded-0 py-3 px-card greetings-item border-top  border-0">
                      <div className="row flex-between-center">
                        <div className="col">
                          <div className="d-flex">
                            <div className="fas fa-circle mt-1 fs--2 text-primary" />
                            <p className="fs--1 ps-2 mb-0">
                              <strong>50+ orders</strong> need to be fulfilled
                            </p>
                          </div>
                        </div>
                        <div className="col-auto d-flex align-items-center">
                          <a className="alert-link fs--1 fw-medium" href="#!">
                            View orders
                            <i className="fas fa-chevron-right ms-1 fs--2" />
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="card h-md-100 ecommerce-card-min-width">
                    <div className="card-header pb-0">
                      <h6 className="mb-0 mt-2 d-flex align-items-center">
                        Weekly Sales
                        <span
                          className="ms-1 text-400"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Calculated according to last week's sales"
                        >
                          <span
                            className="far fa-question-circle"
                            data-fa-transform="shrink-1"
                          />
                        </span>
                      </h6>
                    </div>
                    <div className="card-body d-flex flex-column justify-content-end">
                      <div className="row">
                        <div className="col">
                          <p className="font-sans-serif lh-1 mb-1 fs-2">$47K</p>
                          <span className="badge badge-soft-success rounded-pill fs--2">
                            +3.5%
                          </span>
                        </div>
                        <div className="col-auto ps-0">
                          <div className="echart-bar-weekly-sales h-100 echart-bar-weekly-sales-smaller-width" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card product-share-doughnut-width">
                    <div className="card-header pb-0">
                      <h6 className="mb-0 mt-2 d-flex align-items-center">
                        Product Share
                      </h6>
                    </div>
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex flex-column justify-content-between">
                          <p className="font-sans-serif lh-1 mb-1 fs-2">
                            34.6%
                          </p>
                          <span className="badge badge-soft-warning rounded-pill fs--2">
                            <span className="fas fa-caret-up me-1" />
                            3.5%
                          </span>
                        </div>
                        <div>
                          <canvas
                            className="my-n5"
                            id="marketShareDoughnut"
                            width={112}
                          />
                          <p className="mb-0 text-center fs--2 mt-4 text-500">
                            Target: <span className="text-800">55% </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card h-md-100 h-100">
                    <div className="card-body">
                      <div className="row h-100 justify-content-between g-0">
                        <div className="col-5 col-sm-6 col-xxl pe-2">
                          <h6 className="mt-1">Market Share</h6>
                          <div className="fs--2 mt-3">
                            <div className="d-flex flex-between-center mb-1">
                              <div className="d-flex align-items-center">
                                <span className="dot bg-primary" />
                                <span className="fw-semi-bold">Falcon</span>
                              </div>
                              <div className="d-xxl-none">57%</div>
                            </div>
                            <div className="d-flex flex-between-center mb-1">
                              <div className="d-flex align-items-center">
                                <span className="dot bg-info" />
                                <span className="fw-semi-bold">Sparrow</span>
                              </div>
                              <div className="d-xxl-none">20%</div>
                            </div>
                            <div className="d-flex flex-between-center mb-1">
                              <div className="d-flex align-items-center">
                                <span className="dot bg-warning" />
                                <span className="fw-semi-bold">Phoenix</span>
                              </div>
                              <div className="d-xxl-none">22%</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto position-relative">
                          <div className="echart-product-share" />
                          <div className="position-absolute top-50 start-50 translate-middle text-dark fs-2">
                            26M
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card h-100">
                    <div className="card-header pb-0">
                      <h6 className="mb-0 mt-2 d-flex align-items-center">
                        Total Order
                      </h6>
                    </div>
                    <div className="card-body">
                      <div className="row align-items-end">
                        <div className="col">
                          <p className="font-sans-serif lh-1 mb-1 fs-2">
                            58.4K
                          </p>
                          <div className="badge badge-soft-primary rounded-pill fs--2">
                            <span className="fas fa-caret-up me-1" />
                            13.6%
                          </div>
                        </div>
                        <div className="col-auto ps-0">
                          <div
                            className="total-order-ecommerce"
                            data-echarts='{"series":[{"type":"line","data":[110,100,250,210,530,480,320,325]}],"grid":{"bottom":"-10px"}}'
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-6 col-xl-12">
          <div className="card py-3 mb-3">
            <div className="card-body py-3">
              <div className="row g-0">
                <div className="col-6 col-md-4 border-200 border-bottom border-end pb-4">
                  <h6 className="pb-1 text-700">Orders </h6>
                  <p className="font-sans-serif lh-1 mb-1 fs-2">15,450 </p>
                  <div className="d-flex align-items-center">
                    <h6 className="fs--1 text-500 mb-0">13,675 </h6>
                    <h6 className="fs--2 ps-3 mb-0 text-primary">
                      <span className="me-1 fas fa-caret-up" />
                      21.8%
                    </h6>
                  </div>
                </div>
                <div className="col-6 col-md-4 border-200 border-md-200 border-bottom border-md-end pb-4 ps-3">
                  <h6 className="pb-1 text-700">Items sold </h6>
                  <p className="font-sans-serif lh-1 mb-1 fs-2">1,054 </p>
                  <div className="d-flex align-items-center">
                    <h6 className="fs--1 text-500 mb-0">13,675 </h6>
                    <h6 className="fs--2 ps-3 mb-0 text-warning">
                      <span className="me-1 fas fa-caret-up" />
                      21.8%
                    </h6>
                  </div>
                </div>
                <div className="col-6 col-md-4 border-200 border-bottom border-end border-md-end-0 pb-4 pt-4 pt-md-0 ps-md-3">
                  <h6 className="pb-1 text-700">Refunds </h6>
                  <p className="font-sans-serif lh-1 mb-1 fs-2">$145.65 </p>
                  <div className="d-flex align-items-center">
                    <h6 className="fs--1 text-500 mb-0">13,675 </h6>
                    <h6 className="fs--2 ps-3 mb-0 text-success">
                      <span className="me-1 fas fa-caret-up" />
                      21.8%
                    </h6>
                  </div>
                </div>
                <div className="col-6 col-md-4 border-200 border-md-200 border-bottom border-md-bottom-0 border-md-end pt-4 pb-md-0 ps-3 ps-md-0">
                  <h6 className="pb-1 text-700">Gross sale </h6>
                  <p className="font-sans-serif lh-1 mb-1 fs-2">$100.26 </p>
                  <div className="d-flex align-items-center">
                    <h6 className="fs--1 text-500 mb-0">$109.65 </h6>
                    <h6 className="fs--2 ps-3 mb-0 text-danger">
                      <span className="me-1 fas fa-caret-up" />
                      21.8%
                    </h6>
                  </div>
                </div>
                <div className="col-6 col-md-4 border-200 border-md-bottom-0 border-end pt-4 pb-md-0 ps-md-3">
                  <h6 className="pb-1 text-700">Shipping </h6>
                  <p className="font-sans-serif lh-1 mb-1 fs-2">$365.53 </p>
                  <div className="d-flex align-items-center">
                    <h6 className="fs--1 text-500 mb-0">13,675 </h6>
                    <h6 className="fs--2 ps-3 mb-0 text-success">
                      <span className="me-1 fas fa-caret-up" />
                      21.8%
                    </h6>
                  </div>
                </div>
                <div className="col-6 col-md-4 pb-0 pt-4 ps-3">
                  <h6 className="pb-1 text-700">Processing </h6>
                  <p className="font-sans-serif lh-1 mb-1 fs-2">861 </p>
                  <div className="d-flex align-items-center">
                    <h6 className="fs--1 text-500 mb-0">13,675 </h6>
                    <h6 className="fs--2 ps-3 mb-0 text-info">
                      <span className="me-1 fas fa-caret-up" />
                      21.8%
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="row flex-between-center g-0">
                <div className="col-auto">
                  <h6 className="mb-0">Total Sales</h6>
                </div>
                <div className="col-auto d-flex">
                  <div className="form-check mb-0 d-flex">
                    <input
                      className="form-check-input form-check-input-primary"
                      id="ecommerceLastMonth"
                      type="checkbox"
                      defaultChecked="checked"
                    />
                    <label
                      className="form-check-label ps-2 fs--2 text-600 mb-0"
                      htmlFor="ecommerceLastMonth"
                    >
                      Last Month
                      <span className="text-dark d-none d-md-inline">
                        : $32,502.00
                      </span>
                    </label>
                  </div>
                  <div className="form-check mb-0 d-flex ps-0 ps-md-3">
                    <input
                      className="form-check-input ms-2 form-check-input-warning opacity-75"
                      id="ecommercePrevYear"
                      type="checkbox"
                      defaultChecked="checked"
                    />
                    <label
                      className="form-check-label ps-2 fs--2 text-600 mb-0"
                      htmlFor="ecommercePrevYear"
                    >
                      Prev Year
                      <span className="text-dark d-none d-md-inline">
                        : $46,018.00
                      </span>
                    </label>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="dropdown font-sans-serif btn-reveal-trigger">
                    <button
                      className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal"
                      type="button"
                      id="dropdown-total-sales-ecomm"
                      data-bs-toggle="dropdown"
                      data-boundary="viewport"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="fas fa-ellipsis-h fs--2" />
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-end border py-2"
                      aria-labelledby="dropdown-total-sales-ecomm"
                    >
                      <a className="dropdown-item" href="#!">
                        View
                      </a>
                      <a className="dropdown-item" href="#!">
                        Export
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item text-danger" href="#!">
                        Remove
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body pe-xxl-0">
              {/* Find the JS file for the following chart at: src/js/charts/echarts/total-sales-ecommerce.js*/}
              {/* If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/theme.js*/}
              <div
                className="echart-line-total-sales-ecommerce"
                data-echart-responsive="true"
                data-options='{"optionOne":"ecommerceLastMonth","optionTwo":"ecommercePrevYear"}'
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row g-3 mb-3">
        <div className="col-xxl-3 col-md-6 col-lg-5">
          <div className="card shopping-cart-bar-min-height h-100">
            <div className="card-header d-flex flex-between-center">
              <h6 className="mb-0">Shopping Cart</h6>
              <div className="dropdown font-sans-serif btn-reveal-trigger">
                <button
                  className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal"
                  type="button"
                  id="dropdown-shopping-cart-bar"
                  data-bs-toggle="dropdown"
                  data-boundary="viewport"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="fas fa-ellipsis-h fs--2" />
                </button>
                <div
                  className="dropdown-menu dropdown-menu-end border py-2"
                  aria-labelledby="dropdown-shopping-cart-bar"
                >
                  <a className="dropdown-item" href="#!">
                    View
                  </a>
                  <a className="dropdown-item" href="#!">
                    Export
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item text-danger" href="#!">
                    Remove
                  </a>
                </div>
              </div>
            </div>
            <div className="card-body py-0 d-flex align-items-center h-100">
              <div className="flex-1">
                <div className="row g-0 align-items-center pb-3">
                  <div className="col pe-4">
                    <h6 className="fs--2 text-600">Initiated</h6>
                    <div className="progress" style={{ height: 5 }}>
                      <div
                        className="progress-bar rounded-3 bg-primary"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="col-auto text-end">
                    <p className="mb-0 text-900 font-sans-serif">
                      <span className="me-1 fas fa-caret-up text-success" />
                      43.6%
                    </p>
                    <p className="mb-0 fs--2 text-500 fw-semi-bold">
                      {" "}
                      Session: <span className="text-600">6817</span>{" "}
                    </p>
                  </div>
                </div>
                <div className="row g-0 align-items-center pb-3 border-top pt-3">
                  <div className="col pe-4">
                    <h6 className="fs--2 text-600">Abandonment rate</h6>
                    <div className="progress" style={{ height: 5 }}>
                      <div
                        className="progress-bar rounded-3 bg-danger"
                        role="progressbar"
                        style={{ width: "25%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="col-auto text-end">
                    <p className="mb-0 text-900 font-sans-serif">
                      <span className="me-1 fas fa-caret-up text-danger" />
                      13.11%
                    </p>
                    <p className="mb-0 fs--2 text-500 fw-semi-bold">
                      <span className="text-600">44</span> of 61
                    </p>
                  </div>
                </div>
                <div className="row g-0 align-items-center pb-3 border-top pt-3">
                  <div className="col pe-4">
                    <h6 className="fs--2 text-600">Bounce rate</h6>
                    <div className="progress" style={{ height: 5 }}>
                      <div
                        className="progress-bar rounded-3 bg-primary"
                        role="progressbar"
                        style={{ width: "35%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="col-auto text-end">
                    <p className="mb-0 text-900 font-sans-serif">
                      <span className="me-1 fas fa-caret-up text-success" />
                      12.11%
                    </p>
                    <p className="mb-0 fs--2 text-500 fw-semi-bold">
                      <span className="text-600">8</span> of 61
                    </p>
                  </div>
                </div>
                <div className="row g-0 align-items-center pb-3 border-top pt-3">
                  <div className="col pe-4">
                    <h6 className="fs--2 text-600">Completion rate</h6>
                    <div className="progress" style={{ height: 5 }}>
                      <div
                        className="progress-bar rounded-3 bg-primary"
                        role="progressbar"
                        style={{ width: "43%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="col-auto text-end">
                    <p className="mb-0 text-900 font-sans-serif">
                      <span className="me-1 fas fa-caret-down text-danger" />
                      43.6%
                    </p>
                    <p className="mb-0 fs--2 text-500 fw-semi-bold">
                      <span className="text-600">18</span> of 179
                    </p>
                  </div>
                </div>
                <div className="row g-0 align-items-center pb-3 border-top pt-3">
                  <div className="col pe-4">
                    <h6 className="fs--2 text-600">Revenue Rate</h6>
                    <div className="progress" style={{ height: 5 }}>
                      <div
                        className="progress-bar rounded-3 bg-primary"
                        role="progressbar"
                        style={{ width: "60%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="col-auto text-end">
                    <p className="mb-0 text-900 font-sans-serif">
                      <span className="me-1 fas fa-caret-up text-success" />
                      60.5%
                    </p>
                    <p className="mb-0 fs--2 text-500 fw-semi-bold">
                      <span className="text-600">18</span> of 179
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-md-6 col-lg-7 order-xxl-1">
          <div className="card h-100">
            <div className="card-header bg-light py-2 d-flex flex-between-center">
              <h6 className="mb-0">Top Products</h6>
              <div className="d-flex">
                <a className="btn btn-link btn-sm me-2" href="#!">
                  View Details
                </a>
                <div className="dropdown font-sans-serif btn-reveal-trigger">
                  <button
                    className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal"
                    type="button"
                    id="dropdown-top-products"
                    data-bs-toggle="dropdown"
                    data-boundary="viewport"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="fas fa-ellipsis-h fs--2" />
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-end border py-2"
                    aria-labelledby="dropdown-top-products"
                  >
                    <a className="dropdown-item" href="#!">
                      View
                    </a>
                    <a className="dropdown-item" href="#!">
                      Export
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item text-danger" href="#!">
                      Remove
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body d-flex h-100 flex-column justify-content-end">
              {/* Find the JS file for the following chart at: src/js/charts/echarts/top-products.js*/}
              {/* If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/theme.js*/}
              <div
                className="echart-bar-top-products echart-bar-top-products-ecommerce"
                data-echart-responsive="true"
              ></div>
            </div>
          </div>
        </div>
        <div className="col-xxl-9 col-md-12">
          <div
            className="card z-index-1"
            id="recentPurchaseTable"
            data-list='{"valueNames":["name","email","product","payment","amount"],"page":7,"pagination":true}'
          >
            <div className="card-header">
              <div className="row flex-between-center">
                <div className="col-6 col-sm-auto d-flex align-items-center pe-0">
                  <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">
                    Recent Purchases{" "}
                  </h5>
                </div>
                <div className="col-6 col-sm-auto ms-auto text-end ps-0">
                  <div className="d-none" id="table-purchases-actions">
                    <div className="d-flex">
                      <select
                        className="form-select form-select-sm"
                        aria-label="Bulk actions"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Bulk actions
                        </option>
                        <option value="Refund">Refund</option>
                        <option value="Delete">Delete</option>
                        <option value="Archive">Archive</option>
                      </select>
                      <button
                        className="btn btn-falcon-default btn-sm ms-2"
                        type="button"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                  <div id="table-purchases-replace-element">
                    <button
                      className="btn btn-falcon-default btn-sm"
                      type="button"
                    >
                      <span
                        className="fas fa-plus"
                        data-fa-transform="shrink-3 down-2"
                      />
                      <span className="d-none d-sm-inline-block ms-1">New</span>
                    </button>
                    <button
                      className="btn btn-falcon-default btn-sm mx-2"
                      type="button"
                    >
                      <span
                        className="fas fa-filter"
                        data-fa-transform="shrink-3 down-2"
                      />
                      <span className="d-none d-sm-inline-block ms-1">
                        Filter
                      </span>
                    </button>
                    <button
                      className="btn btn-falcon-default btn-sm"
                      type="button"
                    >
                      <span
                        className="fas fa-external-link-alt"
                        data-fa-transform="shrink-3 down-2"
                      />
                      <span className="d-none d-sm-inline-block ms-1">
                        Export
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body px-0 py-0">
              <div className="table-responsive scrollbar">
                <table className="table table-sm fs--1 mb-0 overflow-hidden">
                  <thead className="bg-200 text-900">
                    <tr>
                      <th className="white-space-nowrap">
                        <div className="form-check mb-0 d-flex align-items-center">
                          <input
                            className="form-check-input"
                            id="checkbox-bulk-purchases-select"
                            type="checkbox"
                            data-bulk-select='{"body":"table-purchase-body","actions":"table-purchases-actions","replacedElement":"table-purchases-replace-element"}'
                          />
                        </div>
                      </th>
                      <th
                        className="sort pe-1 align-middle white-space-nowrap"
                        data-sort="name"
                      >
                        Customer
                      </th>
                      <th
                        className="sort pe-1 align-middle white-space-nowrap"
                        data-sort="email"
                      >
                        Email
                      </th>
                      <th
                        className="sort pe-1 align-middle white-space-nowrap"
                        data-sort="product"
                      >
                        Product
                      </th>
                      <th
                        className="sort pe-1 align-middle white-space-nowrap text-center"
                        data-sort="payment"
                      >
                        Payment
                      </th>
                      <th
                        className="sort pe-1 align-middle white-space-nowrap text-end"
                        data-sort="amount"
                      >
                        Amount
                      </th>
                      <th className="no-sort pe-1 align-middle data-table-row-action" />
                    </tr>
                  </thead>
                  <tbody className="list" id="table-purchase-body">
                    <tr className="btn-reveal-trigger">
                      <td className="align-middle" style={{ width: 28 }}>
                        <div className="form-check mb-0">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="recent-purchase-0"
                            data-bulk-select-row="data-bulk-select-row"
                          />
                        </div>
                      </td>
                      <th className="align-middle white-space-nowrap name">
                        <a href="../app/e-commerce/customer-details.html">
                          Sylvia Plath
                        </a>
                      </th>
                      <td className="align-middle white-space-nowrap email">
                        john@gmail.com
                      </td>
                      <td className="align-middle white-space-nowrap product">
                        Slick - Drag &amp; Drop Bootstrap Generator
                      </td>
                      <td className="align-middle text-center fs-0 white-space-nowrap payment">
                        <span className="badge badge rounded-pill badge-soft-success">
                          Success
                          <span
                            className="ms-1 fas fa-check"
                            data-fa-transform="shrink-2"
                          />
                        </span>
                      </td>
                      <td className="align-middle text-end amount">$99</td>
                      <td className="align-middle white-space-nowrap text-end">
                        <div className="dropstart font-sans-serif position-static d-inline-block">
                          <button
                            className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal float-end"
                            type="button"
                            id="dropdown0"
                            data-bs-toggle="dropdown"
                            data-boundary="window"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-bs-reference="parent"
                          >
                            <span className="fas fa-ellipsis-h fs--1" />
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-end border py-2"
                            aria-labelledby="dropdown0"
                          >
                            <a className="dropdown-item" href="#!">
                              View
                            </a>
                            <a className="dropdown-item" href="#!">
                              Edit
                            </a>
                            <a className="dropdown-item" href="#!">
                              Refund
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item text-warning" href="#!">
                              Archive
                            </a>
                            <a className="dropdown-item text-danger" href="#!">
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="btn-reveal-trigger">
                      <td className="align-middle" style={{ width: 28 }}>
                        <div className="form-check mb-0">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="recent-purchase-1"
                            data-bulk-select-row="data-bulk-select-row"
                          />
                        </div>
                      </td>
                      <th className="align-middle white-space-nowrap name">
                        <a href="../app/e-commerce/customer-details.html">
                          Homer
                        </a>
                      </th>
                      <td className="align-middle white-space-nowrap email">
                        sylvia@mail.ru
                      </td>
                      <td className="align-middle white-space-nowrap product">
                        Bose SoundSport Wireless Headphones
                      </td>
                      <td className="align-middle text-center fs-0 white-space-nowrap payment">
                        <span className="badge badge rounded-pill badge-soft-success">
                          Success
                          <span
                            className="ms-1 fas fa-check"
                            data-fa-transform="shrink-2"
                          />
                        </span>
                      </td>
                      <td className="align-middle text-end amount">$634</td>
                      <td className="align-middle white-space-nowrap text-end">
                        <div className="dropstart font-sans-serif position-static d-inline-block">
                          <button
                            className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal float-end"
                            type="button"
                            id="dropdown1"
                            data-bs-toggle="dropdown"
                            data-boundary="window"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-bs-reference="parent"
                          >
                            <span className="fas fa-ellipsis-h fs--1" />
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-end border py-2"
                            aria-labelledby="dropdown1"
                          >
                            <a className="dropdown-item" href="#!">
                              View
                            </a>
                            <a className="dropdown-item" href="#!">
                              Edit
                            </a>
                            <a className="dropdown-item" href="#!">
                              Refund
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item text-warning" href="#!">
                              Archive
                            </a>
                            <a className="dropdown-item text-danger" href="#!">
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="btn-reveal-trigger">
                      <td className="align-middle" style={{ width: 28 }}>
                        <div className="form-check mb-0">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="recent-purchase-2"
                            data-bulk-select-row="data-bulk-select-row"
                          />
                        </div>
                      </td>
                      <th className="align-middle white-space-nowrap name">
                        <a href="../app/e-commerce/customer-details.html">
                          Edgar Allan Poe
                        </a>
                      </th>
                      <td className="align-middle white-space-nowrap email">
                        edgar@yahoo.com
                      </td>
                      <td className="align-middle white-space-nowrap product">
                        All-New Fire HD 8 Kids Edition Tablet
                      </td>
                      <td className="align-middle text-center fs-0 white-space-nowrap payment">
                        <span className="badge badge rounded-pill badge-soft-secondary">
                          Blocked
                          <span
                            className="ms-1 fas fa-ban"
                            data-fa-transform="shrink-2"
                          />
                        </span>
                      </td>
                      <td className="align-middle text-end amount">$199</td>
                      <td className="align-middle white-space-nowrap text-end">
                        <div className="dropstart font-sans-serif position-static d-inline-block">
                          <button
                            className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal float-end"
                            type="button"
                            id="dropdown2"
                            data-bs-toggle="dropdown"
                            data-boundary="window"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-bs-reference="parent"
                          >
                            <span className="fas fa-ellipsis-h fs--1" />
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-end border py-2"
                            aria-labelledby="dropdown2"
                          >
                            <a className="dropdown-item" href="#!">
                              View
                            </a>
                            <a className="dropdown-item" href="#!">
                              Edit
                            </a>
                            <a className="dropdown-item" href="#!">
                              Refund
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item text-warning" href="#!">
                              Archive
                            </a>
                            <a className="dropdown-item text-danger" href="#!">
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="btn-reveal-trigger">
                      <td className="align-middle" style={{ width: 28 }}>
                        <div className="form-check mb-0">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="recent-purchase-3"
                            data-bulk-select-row="data-bulk-select-row"
                          />
                        </div>
                      </td>
                      <th className="align-middle white-space-nowrap name">
                        <a href="../app/e-commerce/customer-details.html">
                          William Butler Yeats
                        </a>
                      </th>
                      <td className="align-middle white-space-nowrap email">
                        william@gmail.com
                      </td>
                      <td className="align-middle white-space-nowrap product">
                        Apple iPhone XR (64GB)
                      </td>
                      <td className="align-middle text-center fs-0 white-space-nowrap payment">
                        <span className="badge badge rounded-pill badge-soft-success">
                          Success
                          <span
                            className="ms-1 fas fa-check"
                            data-fa-transform="shrink-2"
                          />
                        </span>
                      </td>
                      <td className="align-middle text-end amount">$798</td>
                      <td className="align-middle white-space-nowrap text-end">
                        <div className="dropstart font-sans-serif position-static d-inline-block">
                          <button
                            className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal float-end"
                            type="button"
                            id="dropdown3"
                            data-bs-toggle="dropdown"
                            data-boundary="window"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-bs-reference="parent"
                          >
                            <span className="fas fa-ellipsis-h fs--1" />
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-end border py-2"
                            aria-labelledby="dropdown3"
                          >
                            <a className="dropdown-item" href="#!">
                              View
                            </a>
                            <a className="dropdown-item" href="#!">
                              Edit
                            </a>
                            <a className="dropdown-item" href="#!">
                              Refund
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item text-warning" href="#!">
                              Archive
                            </a>
                            <a className="dropdown-item text-danger" href="#!">
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="btn-reveal-trigger">
                      <td className="align-middle" style={{ width: 28 }}>
                        <div className="form-check mb-0">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="recent-purchase-4"
                            data-bulk-select-row="data-bulk-select-row"
                          />
                        </div>
                      </td>
                      <th className="align-middle white-space-nowrap name">
                        <a href="../app/e-commerce/customer-details.html">
                          Rabindranath Tagore
                        </a>
                      </th>
                      <td className="align-middle white-space-nowrap email">
                        tagore@twitter.com
                      </td>
                      <td className="align-middle white-space-nowrap product">
                        ASUS Chromebook C202SA-YS02 11.6
                      </td>
                      <td className="align-middle text-center fs-0 white-space-nowrap payment">
                        <span className="badge badge rounded-pill badge-soft-secondary">
                          Blocked
                          <span
                            className="ms-1 fas fa-ban"
                            data-fa-transform="shrink-2"
                          />
                        </span>
                      </td>
                      <td className="align-middle text-end amount">$318</td>
                      <td className="align-middle white-space-nowrap text-end">
                        <div className="dropstart font-sans-serif position-static d-inline-block">
                          <button
                            className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal float-end"
                            type="button"
                            id="dropdown4"
                            data-bs-toggle="dropdown"
                            data-boundary="window"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-bs-reference="parent"
                          >
                            <span className="fas fa-ellipsis-h fs--1" />
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-end border py-2"
                            aria-labelledby="dropdown4"
                          >
                            <a className="dropdown-item" href="#!">
                              View
                            </a>
                            <a className="dropdown-item" href="#!">
                              Edit
                            </a>
                            <a className="dropdown-item" href="#!">
                              Refund
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item text-warning" href="#!">
                              Archive
                            </a>
                            <a className="dropdown-item text-danger" href="#!">
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="btn-reveal-trigger">
                      <td className="align-middle" style={{ width: 28 }}>
                        <div className="form-check mb-0">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="recent-purchase-5"
                            data-bulk-select-row="data-bulk-select-row"
                          />
                        </div>
                      </td>
                      <th className="align-middle white-space-nowrap name">
                        <a href="../app/e-commerce/customer-details.html">
                          Emily Dickinson
                        </a>
                      </th>
                      <td className="align-middle white-space-nowrap email">
                        emily@gmail.com
                      </td>
                      <td className="align-middle white-space-nowrap product">
                        Mirari OK to Wake! Alarm Clock &amp; Night-Light
                      </td>
                      <td className="align-middle text-center fs-0 white-space-nowrap payment">
                        <span className="badge badge rounded-pill badge-soft-warning">
                          Pending
                          <span
                            className="ms-1 fas fa-stream"
                            data-fa-transform="shrink-2"
                          />
                        </span>
                      </td>
                      <td className="align-middle text-end amount">$11</td>
                      <td className="align-middle white-space-nowrap text-end">
                        <div className="dropstart font-sans-serif position-static d-inline-block">
                          <button
                            className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal float-end"
                            type="button"
                            id="dropdown5"
                            data-bs-toggle="dropdown"
                            data-boundary="window"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-bs-reference="parent"
                          >
                            <span className="fas fa-ellipsis-h fs--1" />
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-end border py-2"
                            aria-labelledby="dropdown5"
                          >
                            <a className="dropdown-item" href="#!">
                              View
                            </a>
                            <a className="dropdown-item" href="#!">
                              Edit
                            </a>
                            <a className="dropdown-item" href="#!">
                              Refund
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item text-warning" href="#!">
                              Archive
                            </a>
                            <a className="dropdown-item text-danger" href="#!">
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="btn-reveal-trigger">
                      <td className="align-middle" style={{ width: 28 }}>
                        <div className="form-check mb-0">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="recent-purchase-6"
                            data-bulk-select-row="data-bulk-select-row"
                          />
                        </div>
                      </td>
                      <th className="align-middle white-space-nowrap name">
                        <a href="../app/e-commerce/customer-details.html">
                          Giovanni Boccaccio
                        </a>
                      </th>
                      <td className="align-middle white-space-nowrap email">
                        giovanni@outlook.com
                      </td>
                      <td className="align-middle white-space-nowrap product">
                        Summer Infant Contoured Changing Pad
                      </td>
                      <td className="align-middle text-center fs-0 white-space-nowrap payment">
                        <span className="badge badge rounded-pill badge-soft-success">
                          Success
                          <span
                            className="ms-1 fas fa-check"
                            data-fa-transform="shrink-2"
                          />
                        </span>
                      </td>
                      <td className="align-middle text-end amount">$31</td>
                      <td className="align-middle white-space-nowrap text-end">
                        <div className="dropstart font-sans-serif position-static d-inline-block">
                          <button
                            className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal float-end"
                            type="button"
                            id="dropdown6"
                            data-bs-toggle="dropdown"
                            data-boundary="window"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-bs-reference="parent"
                          >
                            <span className="fas fa-ellipsis-h fs--1" />
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-end border py-2"
                            aria-labelledby="dropdown6"
                          >
                            <a className="dropdown-item" href="#!">
                              View
                            </a>
                            <a className="dropdown-item" href="#!">
                              Edit
                            </a>
                            <a className="dropdown-item" href="#!">
                              Refund
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item text-warning" href="#!">
                              Archive
                            </a>
                            <a className="dropdown-item text-danger" href="#!">
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="btn-reveal-trigger">
                      <td className="align-middle" style={{ width: 28 }}>
                        <div className="form-check mb-0">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="recent-purchase-7"
                            data-bulk-select-row="data-bulk-select-row"
                          />
                        </div>
                      </td>
                      <th className="align-middle white-space-nowrap name">
                        <a href="../app/e-commerce/customer-details.html">
                          Oscar Wilde
                        </a>
                      </th>
                      <td className="align-middle white-space-nowrap email">
                        oscar@hotmail.com
                      </td>
                      <td className="align-middle white-space-nowrap product">
                        Munchkin 6 Piece Fork and Spoon Set
                      </td>
                      <td className="align-middle text-center fs-0 white-space-nowrap payment">
                        <span className="badge badge rounded-pill badge-soft-success">
                          Success
                          <span
                            className="ms-1 fas fa-check"
                            data-fa-transform="shrink-2"
                          />
                        </span>
                      </td>
                      <td className="align-middle text-end amount">$43</td>
                      <td className="align-middle white-space-nowrap text-end">
                        <div className="dropstart font-sans-serif position-static d-inline-block">
                          <button
                            className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal float-end"
                            type="button"
                            id="dropdown7"
                            data-bs-toggle="dropdown"
                            data-boundary="window"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-bs-reference="parent"
                          >
                            <span className="fas fa-ellipsis-h fs--1" />
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-end border py-2"
                            aria-labelledby="dropdown7"
                          >
                            <a className="dropdown-item" href="#!">
                              View
                            </a>
                            <a className="dropdown-item" href="#!">
                              Edit
                            </a>
                            <a className="dropdown-item" href="#!">
                              Refund
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item text-warning" href="#!">
                              Archive
                            </a>
                            <a className="dropdown-item text-danger" href="#!">
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="btn-reveal-trigger">
                      <td className="align-middle" style={{ width: 28 }}>
                        <div className="form-check mb-0">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="recent-purchase-8"
                            data-bulk-select-row="data-bulk-select-row"
                          />
                        </div>
                      </td>
                      <th className="align-middle white-space-nowrap name">
                        <a href="../app/e-commerce/customer-details.html">
                          John Doe
                        </a>
                      </th>
                      <td className="align-middle white-space-nowrap email">
                        doe@gmail.com
                      </td>
                      <td className="align-middle white-space-nowrap product">
                        Falcon - Responsive Dashboard Template
                      </td>
                      <td className="align-middle text-center fs-0 white-space-nowrap payment">
                        <span className="badge badge rounded-pill badge-soft-success">
                          Success
                          <span
                            className="ms-1 fas fa-check"
                            data-fa-transform="shrink-2"
                          />
                        </span>
                      </td>
                      <td className="align-middle text-end amount">$57</td>
                      <td className="align-middle white-space-nowrap text-end">
                        <div className="dropstart font-sans-serif position-static d-inline-block">
                          <button
                            className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal float-end"
                            type="button"
                            id="dropdown8"
                            data-bs-toggle="dropdown"
                            data-boundary="window"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-bs-reference="parent"
                          >
                            <span className="fas fa-ellipsis-h fs--1" />
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-end border py-2"
                            aria-labelledby="dropdown8"
                          >
                            <a className="dropdown-item" href="#!">
                              View
                            </a>
                            <a className="dropdown-item" href="#!">
                              Edit
                            </a>
                            <a className="dropdown-item" href="#!">
                              Refund
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item text-warning" href="#!">
                              Archive
                            </a>
                            <a className="dropdown-item text-danger" href="#!">
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="btn-reveal-trigger">
                      <td className="align-middle" style={{ width: 28 }}>
                        <div className="form-check mb-0">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="recent-purchase-9"
                            data-bulk-select-row="data-bulk-select-row"
                          />
                        </div>
                      </td>
                      <th className="align-middle white-space-nowrap name">
                        <a href="../app/e-commerce/customer-details.html">
                          Emma Watson
                        </a>
                      </th>
                      <td className="align-middle white-space-nowrap email">
                        emma@gmail.com
                      </td>
                      <td className="align-middle white-space-nowrap product">
                        Apple iPhone XR (64GB)
                      </td>
                      <td className="align-middle text-center fs-0 white-space-nowrap payment">
                        <span className="badge badge rounded-pill badge-soft-secondary">
                          Blocked
                          <span
                            className="ms-1 fas fa-ban"
                            data-fa-transform="shrink-2"
                          />
                        </span>
                      </td>
                      <td className="align-middle text-end amount">$999</td>
                      <td className="align-middle white-space-nowrap text-end">
                        <div className="dropstart font-sans-serif position-static d-inline-block">
                          <button
                            className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal float-end"
                            type="button"
                            id="dropdown9"
                            data-bs-toggle="dropdown"
                            data-boundary="window"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-bs-reference="parent"
                          >
                            <span className="fas fa-ellipsis-h fs--1" />
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-end border py-2"
                            aria-labelledby="dropdown9"
                          >
                            <a className="dropdown-item" href="#!">
                              View
                            </a>
                            <a className="dropdown-item" href="#!">
                              Edit
                            </a>
                            <a className="dropdown-item" href="#!">
                              Refund
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item text-warning" href="#!">
                              Archive
                            </a>
                            <a className="dropdown-item text-danger" href="#!">
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="btn-reveal-trigger">
                      <td className="align-middle" style={{ width: 28 }}>
                        <div className="form-check mb-0">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="recent-purchase-10"
                            data-bulk-select-row="data-bulk-select-row"
                          />
                        </div>
                      </td>
                      <th className="align-middle white-space-nowrap name">
                        <a href="../app/e-commerce/customer-details.html">
                          Sylvia Plath
                        </a>
                      </th>
                      <td className="align-middle white-space-nowrap email">
                        plath@yahoo.com
                      </td>
                      <td className="align-middle white-space-nowrap product">
                        All-New Fire HD 8 Kids Edition Tablet
                      </td>
                      <td className="align-middle text-center fs-0 white-space-nowrap payment">
                        <span className="badge badge rounded-pill badge-soft-warning">
                          Pending
                          <span
                            className="ms-1 fas fa-stream"
                            data-fa-transform="shrink-2"
                          />
                        </span>
                      </td>
                      <td className="align-middle text-end amount">$199</td>
                      <td className="align-middle white-space-nowrap text-end">
                        <div className="dropstart font-sans-serif position-static d-inline-block">
                          <button
                            className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal float-end"
                            type="button"
                            id="dropdown10"
                            data-bs-toggle="dropdown"
                            data-boundary="window"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-bs-reference="parent"
                          >
                            <span className="fas fa-ellipsis-h fs--1" />
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-end border py-2"
                            aria-labelledby="dropdown10"
                          >
                            <a className="dropdown-item" href="#!">
                              View
                            </a>
                            <a className="dropdown-item" href="#!">
                              Edit
                            </a>
                            <a className="dropdown-item" href="#!">
                              Refund
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item text-warning" href="#!">
                              Archive
                            </a>
                            <a className="dropdown-item text-danger" href="#!">
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="btn-reveal-trigger">
                      <td className="align-middle" style={{ width: 28 }}>
                        <div className="form-check mb-0">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="recent-purchase-11"
                            data-bulk-select-row="data-bulk-select-row"
                          />
                        </div>
                      </td>
                      <th className="align-middle white-space-nowrap name">
                        <a href="../app/e-commerce/customer-details.html">
                          Rabindranath Tagore
                        </a>
                      </th>
                      <td className="align-middle white-space-nowrap email">
                        Rabindra@gmail.com
                      </td>
                      <td className="align-middle white-space-nowrap product">
                        Apple iPhone XR (64GB)
                      </td>
                      <td className="align-middle text-center fs-0 white-space-nowrap payment">
                        <span className="badge badge rounded-pill badge-soft-secondary">
                          Blocked
                          <span
                            className="ms-1 fas fa-ban"
                            data-fa-transform="shrink-2"
                          />
                        </span>
                      </td>
                      <td className="align-middle text-end amount">$999</td>
                      <td className="align-middle white-space-nowrap text-end">
                        <div className="dropstart font-sans-serif position-static d-inline-block">
                          <button
                            className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal float-end"
                            type="button"
                            id="dropdown11"
                            data-bs-toggle="dropdown"
                            data-boundary="window"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-bs-reference="parent"
                          >
                            <span className="fas fa-ellipsis-h fs--1" />
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-end border py-2"
                            aria-labelledby="dropdown11"
                          >
                            <a className="dropdown-item" href="#!">
                              View
                            </a>
                            <a className="dropdown-item" href="#!">
                              Edit
                            </a>
                            <a className="dropdown-item" href="#!">
                              Refund
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item text-warning" href="#!">
                              Archive
                            </a>
                            <a className="dropdown-item text-danger" href="#!">
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="btn-reveal-trigger">
                      <td className="align-middle" style={{ width: 28 }}>
                        <div className="form-check mb-0">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="recent-purchase-12"
                            data-bulk-select-row="data-bulk-select-row"
                          />
                        </div>
                      </td>
                      <th className="align-middle white-space-nowrap name">
                        <a href="../app/e-commerce/customer-details.html">
                          Anila Wilde
                        </a>
                      </th>
                      <td className="align-middle white-space-nowrap email">
                        anila@yahoo.com
                      </td>
                      <td className="align-middle white-space-nowrap product">
                        All-New Fire HD 8 Kids Edition Tablet
                      </td>
                      <td className="align-middle text-center fs-0 white-space-nowrap payment">
                        <span className="badge badge rounded-pill badge-soft-warning">
                          Pending
                          <span
                            className="ms-1 fas fa-stream"
                            data-fa-transform="shrink-2"
                          />
                        </span>
                      </td>
                      <td className="align-middle text-end amount">$199</td>
                      <td className="align-middle white-space-nowrap text-end">
                        <div className="dropstart font-sans-serif position-static d-inline-block">
                          <button
                            className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal float-end"
                            type="button"
                            id="dropdown12"
                            data-bs-toggle="dropdown"
                            data-boundary="window"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-bs-reference="parent"
                          >
                            <span className="fas fa-ellipsis-h fs--1" />
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-end border py-2"
                            aria-labelledby="dropdown12"
                          >
                            <a className="dropdown-item" href="#!">
                              View
                            </a>
                            <a className="dropdown-item" href="#!">
                              Edit
                            </a>
                            <a className="dropdown-item" href="#!">
                              Refund
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item text-warning" href="#!">
                              Archive
                            </a>
                            <a className="dropdown-item text-danger" href="#!">
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="btn-reveal-trigger">
                      <td className="align-middle" style={{ width: 28 }}>
                        <div className="form-check mb-0">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="recent-purchase-13"
                            data-bulk-select-row="data-bulk-select-row"
                          />
                        </div>
                      </td>
                      <th className="align-middle white-space-nowrap name">
                        <a href="../app/e-commerce/customer-details.html">
                          Jack Watson{" "}
                        </a>
                      </th>
                      <td className="align-middle white-space-nowrap email">
                        Jack@gmail.com
                      </td>
                      <td className="align-middle white-space-nowrap product">
                        Apple iPhone XR (64GB)
                      </td>
                      <td className="align-middle text-center fs-0 white-space-nowrap payment">
                        <span className="badge badge rounded-pill badge-soft-secondary">
                          Blocked
                          <span
                            className="ms-1 fas fa-ban"
                            data-fa-transform="shrink-2"
                          />
                        </span>
                      </td>
                      <td className="align-middle text-end amount">$999</td>
                      <td className="align-middle white-space-nowrap text-end">
                        <div className="dropstart font-sans-serif position-static d-inline-block">
                          <button
                            className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal float-end"
                            type="button"
                            id="dropdown13"
                            data-bs-toggle="dropdown"
                            data-boundary="window"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-bs-reference="parent"
                          >
                            <span className="fas fa-ellipsis-h fs--1" />
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-end border py-2"
                            aria-labelledby="dropdown13"
                          >
                            <a className="dropdown-item" href="#!">
                              View
                            </a>
                            <a className="dropdown-item" href="#!">
                              Edit
                            </a>
                            <a className="dropdown-item" href="#!">
                              Refund
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item text-warning" href="#!">
                              Archive
                            </a>
                            <a className="dropdown-item text-danger" href="#!">
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer">
              <div className="row align-items-center">
                <div className="pagination d-none" />
                <div className="col">
                  <p className="mb-0 fs--1">
                    <span
                      className="d-none d-sm-inline-block me-2"
                      data-list-info="data-list-info"
                    ></span>
                  </p>
                </div>
                <div className="col-auto d-flex">
                  <button
                    className="btn btn-sm btn-primary"
                    type="button"
                    data-list-pagination="prev"
                  >
                    <span>Previous</span>
                  </button>
                  <button
                    className="btn btn-sm btn-primary px-4 ms-2"
                    type="button"
                    data-list-pagination="next"
                  >
                    <span>Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-md-6">
          <div className="card h-100">
            <div className="card-header bg-light">
              <div className="row justify-content-between">
                <div className="col-auto">
                  <h6>Returning Customer Rate</h6>
                  <div className="d-flex align-items-center">
                    <h4 className="text-primary mb-0">$59.09%</h4>
                    <span className="badge rounded-pill ms-3 badge-soft-primary">
                      <span className="fas fa-caret-up" />
                      3.5%
                    </span>
                  </div>
                </div>
                <div className="col-auto">
                  <select
                    className="form-select form-select-sm pe-4"
                    id="select-returning-customer-month"
                  >
                    <option value={0}>Jan</option>
                    <option value={1}>Feb</option>
                    <option value={2}>Mar</option>
                    <option value={3}>Apr</option>
                    <option value={4}>May</option>
                    <option value={5}>Jun</option>
                    <option value={6}>Jul</option>
                    <option value={7}>Aug</option>
                    <option value={8}>Sep</option>
                    <option value={9}>Oct</option>
                    <option value={10}>Nov</option>
                    <option value={11}>Dec</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="card-body">
              {/* Find the JS file for the following chart at: src/js/charts/echarts/returning-customer-rate.js*/}
              {/* If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/theme.js*/}
              <div
                className="echart-line-returning-customer-rate h-100"
                data-echart-responsive="true"
                data-options='{"target":"returning-customer-rate-footer","monthSelect":"select-returning-customer-month","optionOne":"newMonth","optionTwo":"returningMonth"}'
              ></div>
            </div>
            <div className="card-footer border-top py-2">
              <div
                className="row align-items-center gx-0"
                id="returning-customer-rate-footer"
              >
                <div className="col-auto me-2">
                  <div
                    className="btn btn-sm btn-text d-flex align-items-center p-0 shadow-none"
                    id="newMonth"
                  >
                    <span className="fas fa-circle text-primary fs--2 me-1" />
                    New{" "}
                  </div>
                </div>
                <div className="col-auto">
                  <div
                    className="btn btn-sm btn-text d-flex align-items-center p-0 shadow-none"
                    id="returningMonth"
                  >
                    <span className="fas fa-circle text-warning fs--2 me-1" />
                    Returning{" "}
                  </div>
                </div>
                <div className="col text-end">
                  <a className="btn btn-link btn-sm px-0 fw-medium" href="#!">
                    View report{" "}
                    <span className="fas fa-chevron-right ms-1 fs--2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-md-6">
          <div className="card h-100">
            <div className="card-header bg-light py-2">
              <div className="d-flex flex-between-center">
                <h6 className="mb-0">Sales by POS location </h6>
                <a className="btn btn-link btn-sm px-0" href="#!">
                  View Details
                  <span className="fas fa-chevron-right ms-1 fs--2" />
                </a>
              </div>
            </div>
            <div className="card-body px-0 pt-4 pb-0">
              <table className="table table-borderless font-sans-serif fw-medium fs--1">
                <tbody>
                  <tr>
                    <td className="pb-2 pt-0">
                      {" "}
                      <span className="fas fa-circle fs--2 me-1 text-primary" />
                      Allocated Budget
                    </td>
                    <td className="pb-2 pt-0 text-end">$13,325.98</td>
                    <td className="pb-2 pt-0 text-end">
                      <span className="me-1 fas fa-caret-up text-success" />
                      10%
                    </td>
                  </tr>
                  <tr>
                    <td className="pb-2 pt-0">
                      {" "}
                      <span className="fas fa-circle fs--2 me-1 text-warning" />
                      Actual Spending
                    </td>
                    <td className="pb-2 pt-0 text-end">$12,348.46</td>
                    <td className="pb-2 pt-0 text-end">
                      <span className="me-1 fas fa-caret-down text-success" />
                      13%
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* Find the JS file for the following chart at: src/js/charts/echarts/sales-by-pos-location.js*/}
              {/* If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/theme.js*/}
              <div
                className="echart-radar-sales-by-pos-location h-100 px-md-2 mt-md-5"
                data-echart-responsive="true"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card h-lg-100 overflow-hidden">
            <div className="card-body p-0">
              <div className="table-responsive scrollbar">
                <table className="table table-dashboard mb-0 table-borderless fs--1 border-200">
                  <thead className="bg-light">
                    <tr className="text-900">
                      <th>Best Selling Products</th>
                      <th className="text-center">Orders(269)</th>
                      <th className="text-center">Order(%)</th>
                      <th className="text-end">Revenue</th>
                      <th
                        className="pe-card text-end"
                        style={{ width: "8rem" }}
                      >
                        Revenue (%)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-bottom border-200">
                      <td>
                        <div className="d-flex align-items-center position-relative">
                          <img
                            className="rounded-1 border border-200"
                            src="../assets/img/ecommerce/1.jpg"
                            width={60}
                            alt=""
                          />
                          <div className="flex-1 ms-3">
                            <h6 className="mb-1 fw-semi-bold text-nowrap">
                              <a className="text-900 stretched-link" href="#!">
                                iPad Pro 2020 11
                              </a>
                            </h6>
                            <p className="fw-semi-bold mb-0 text-500">Tablet</p>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle text-center fw-semi-bold">
                        26
                      </td>
                      <td className="align-middle text-center fw-semi-bold">
                        $31%
                      </td>
                      <td className="align-middle text-end fw-semi-bold">
                        $1311
                      </td>
                      <td className="align-middle pe-card">
                        <div className="d-flex align-items-center">
                          <div
                            className="progress me-3 rounded-3 bg-200"
                            style={{ height: 5, width: 80 }}
                          >
                            <div
                              className="progress-bar bg-primary rounded-pill"
                              role="progressbar"
                              style={{ width: "41%" }}
                              aria-valuenow={41}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <div className="fw-semi-bold ms-2">41%</div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-bottom border-200">
                      <td>
                        <div className="d-flex align-items-center position-relative">
                          <img
                            className="rounded-1 border border-200"
                            src="../assets/img/ecommerce/2.jpg"
                            width={60}
                            alt=""
                          />
                          <div className="flex-1 ms-3">
                            <h6 className="mb-1 fw-semi-bold text-nowrap">
                              <a className="text-900 stretched-link" href="#!">
                                iPhone XS
                              </a>
                            </h6>
                            <p className="fw-semi-bold mb-0 text-500">
                              Smartphone
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle text-center fw-semi-bold">
                        18
                      </td>
                      <td className="align-middle text-center fw-semi-bold">
                        $29%
                      </td>
                      <td className="align-middle text-end fw-semi-bold">
                        $1311
                      </td>
                      <td className="align-middle pe-card">
                        <div className="d-flex align-items-center">
                          <div
                            className="progress me-3 rounded-3 bg-200"
                            style={{ height: 5, width: 80 }}
                          >
                            <div
                              className="progress-bar bg-primary rounded-pill"
                              role="progressbar"
                              style={{ width: "41%" }}
                              aria-valuenow={41}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <div className="fw-semi-bold ms-2">41%</div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-bottom border-200">
                      <td>
                        <div className="d-flex align-items-center position-relative">
                          <img
                            className="rounded-1 border border-200"
                            src="../assets/img/ecommerce/3.jpg"
                            width={60}
                            alt=""
                          />
                          <div className="flex-1 ms-3">
                            <h6 className="mb-1 fw-semi-bold text-nowrap">
                              <a className="text-900 stretched-link" href="#!">
                                Amazfit Pace (Global)
                              </a>
                            </h6>
                            <p className="fw-semi-bold mb-0 text-500">
                              Smartwatch
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle text-center fw-semi-bold">
                        16
                      </td>
                      <td className="align-middle text-center fw-semi-bold">
                        $27%
                      </td>
                      <td className="align-middle text-end fw-semi-bold">
                        $539
                      </td>
                      <td className="align-middle pe-card">
                        <div className="d-flex align-items-center">
                          <div
                            className="progress me-3 rounded-3 bg-200"
                            style={{ height: 5, width: 80 }}
                          >
                            <div
                              className="progress-bar bg-primary rounded-pill"
                              role="progressbar"
                              style={{ width: "27%" }}
                              aria-valuenow={27}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <div className="fw-semi-bold ms-2">27%</div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-bottom border-200">
                      <td>
                        <div className="d-flex align-items-center position-relative">
                          <img
                            className="rounded-1 border border-200"
                            src="../assets/img/ecommerce/4.jpg"
                            width={60}
                            alt=""
                          />
                          <div className="flex-1 ms-3">
                            <h6 className="mb-1 fw-semi-bold text-nowrap">
                              <a className="text-900 stretched-link" href="#!">
                                Lotto AMF Posh Sports Plus
                              </a>
                            </h6>
                            <p className="fw-semi-bold mb-0 text-500">Shoes</p>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle text-center fw-semi-bold">
                        11
                      </td>
                      <td className="align-middle text-center fw-semi-bold">
                        $21%
                      </td>
                      <td className="align-middle text-end fw-semi-bold">
                        $245
                      </td>
                      <td className="align-middle pe-card">
                        <div className="d-flex align-items-center">
                          <div
                            className="progress me-3 rounded-3 bg-200"
                            style={{ height: 5, width: 80 }}
                          >
                            <div
                              className="progress-bar bg-primary rounded-pill"
                              role="progressbar"
                              style={{ width: "17%" }}
                              aria-valuenow={17}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <div className="fw-semi-bold ms-2">17%</div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-bottom border-200">
                      <td>
                        <div className="d-flex align-items-center position-relative">
                          <img
                            className="rounded-1 border border-200"
                            src="../assets/img/ecommerce/5.jpg"
                            width={60}
                            alt=""
                          />
                          <div className="flex-1 ms-3">
                            <h6 className="mb-1 fw-semi-bold text-nowrap">
                              <a className="text-900 stretched-link" href="#!">
                                Casual Long Sleeve Hoodie
                              </a>
                            </h6>
                            <p className="fw-semi-bold mb-0 text-500">Jacket</p>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle text-center fw-semi-bold">
                        10
                      </td>
                      <td className="align-middle text-center fw-semi-bold">
                        $19%
                      </td>
                      <td className="align-middle text-end fw-semi-bold">
                        $234
                      </td>
                      <td className="align-middle pe-card">
                        <div className="d-flex align-items-center">
                          <div
                            className="progress me-3 rounded-3 bg-200"
                            style={{ height: 5, width: 80 }}
                          >
                            <div
                              className="progress-bar bg-primary rounded-pill"
                              role="progressbar"
                              style={{ width: "7%" }}
                              aria-valuenow={7}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <div className="fw-semi-bold ms-2">7%</div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-bottom border-200">
                      <td>
                        <div className="d-flex align-items-center position-relative">
                          <img
                            className="rounded-1 border border-200"
                            src="../assets/img/ecommerce/6.jpg"
                            width={60}
                            alt=""
                          />
                          <div className="flex-1 ms-3">
                            <h6 className="mb-1 fw-semi-bold text-nowrap">
                              <a className="text-900 stretched-link" href="#!">
                                Playstation 4 1TB Slim
                              </a>
                            </h6>
                            <p className="fw-semi-bold mb-0 text-500">
                              Console
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle text-center fw-semi-bold">
                        10
                      </td>
                      <td className="align-middle text-center fw-semi-bold">
                        $19%
                      </td>
                      <td className="align-middle text-end fw-semi-bold">
                        $234
                      </td>
                      <td className="align-middle pe-card">
                        <div className="d-flex align-items-center">
                          <div
                            className="progress me-3 rounded-3 bg-200"
                            style={{ height: 5, width: 80 }}
                          >
                            <div
                              className="progress-bar bg-primary rounded-pill"
                              role="progressbar"
                              style={{ width: "7%" }}
                              aria-valuenow={7}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <div className="fw-semi-bold ms-2">7%</div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center position-relative">
                          <img
                            className="rounded-1 border border-200"
                            src="../assets/img/ecommerce/7.jpg"
                            width={60}
                            alt=""
                          />
                          <div className="flex-1 ms-3">
                            <h6 className="mb-1 fw-semi-bold text-nowrap">
                              <a className="text-900 stretched-link" href="#!">
                                SUNGAIT Lightweight Sunglass
                              </a>
                            </h6>
                            <p className="fw-semi-bold mb-0 text-500">Jacket</p>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle text-center fw-semi-bold">
                        10
                      </td>
                      <td className="align-middle text-center fw-semi-bold">
                        $19%
                      </td>
                      <td className="align-middle text-end fw-semi-bold">
                        $234
                      </td>
                      <td className="align-middle pe-card">
                        <div className="d-flex align-items-center">
                          <div
                            className="progress me-3 rounded-3 bg-200"
                            style={{ height: 5, width: 80 }}
                          >
                            <div
                              className="progress-bar bg-primary rounded-pill"
                              role="progressbar"
                              style={{ width: "7%" }}
                              aria-valuenow={7}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <div className="fw-semi-bold ms-2">7%</div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer bg-light py-2">
              <div className="row flex-between-center">
                <div className="col-auto">
                  <select className="form-select form-select-sm">
                    <option>Last 7 days</option>
                    <option>Last Month</option>
                    <option>Last Year</option>
                  </select>
                </div>
                <div className="col-auto">
                  <a className="btn btn-sm btn-falcon-default" href="#!">
                    View All
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultPage;
