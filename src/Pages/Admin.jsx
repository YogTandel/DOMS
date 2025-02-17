import Navbar from "../Components/Navbar";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Components/customepagination.css";
import axios from "axios";
import Footer from "../Components/Footer";
import { FaBan, FaCopy, FaLock, FaPager } from "react-icons/fa";

function Admin() {
  const [users, setUsers] = useState([]); // Dynamic user data
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [newAdmin, setNewAdmin] = useState({
    email: "",
    password: "",
    date: "",
    role: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showPageModal, setShowPageModal] = useState(false); // For controlling modal visibility
  const [selectedPages, setSelectedPages] = useState([]); // Stores selected pages
  const [currentUser, setCurrentUser] = useState(null); // Stores the current user being edited
  const navigate = useNavigate();

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const validatePassword = (password) => {
    const lengthValid = password.length >= 6;
    const lowerCaseValid = /[a-z]/.test(password);
    const upperCaseValid = /[A-Z]/.test(password);
    const digitValid = /\d/.test(password);

    return { lengthValid, lowerCaseValid, upperCaseValid, digitValid };
  };

  const passwordValidation = validatePassword(newAdmin.password);

  const pageSize = 5;
  const totalPages = Math.ceil(users.length / pageSize);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const togglePageModal = (user) => {
    setCurrentUser(user); // Set the current user
    setSelectedPages(user.permission ? user.permission.split(", ") : []); // Load selected pages for that user
    setShowPageModal(!showPageModal); // Open/close modal
  };

  // Toggle selection of a page for the current user
  const togglePage = (page) => {
    setSelectedPages(
      (prevPages) =>
        prevPages.includes(page)
          ? prevPages.filter((p) => p !== page) // Deselect page
          : [...prevPages, page] // Select page
    );
  };

  // Save selected pages to the current user
  const handleSavePage = () => {
    const updatedUsers = users.map((u) =>
      u.email === currentUser.email
        ? {
            ...u,
            permission: selectedPages.join(", "), // Save pages as comma-separated string
          }
        : u
    );
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setShowPageModal(false); // Close modal after saving
  };

  // ✅ Token Verification (If JWT is Used)
  const checkToken = useCallback(() => {
    const token = localStorage.getItem("token"); // Get stored token

    if (!token) {
      console.warn("❌ No token found, redirecting...");
      navigate("/");
      return;
    }

    axios
      .get("http://localhost:5000/api/auth/verifyToken", {
        headers: { Authorization: `Bearer ${token}` }, // ✅ If using JWT authentication
        withCredentials: true, // Only needed if cookies are used too
      })
      .then((response) => {
        if (response.data.success) {
          console.log("✅ Session verified, user is authenticated");
        } else {
          console.warn("❌ No active session, redirecting to login...");
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("❌ Session verification failed:", error);
        navigate("/");
      });
  }, [navigate]); // ✅ `navigate` is a stable dependency

  // ✅ Fetch Users (Only if session is valid)
  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admins/admins", {
        method: "GET",
        credentials: "include",
      });

      const result = await response.json();
      console.log("✅ Fetched Users Data:", result);

      if (result.success && Array.isArray(result.data)) {
        setUsers(result.data);
      } else {
        console.error("❌ Unexpected data format: ", result);
      }
    } catch (error) {
      console.error("❌ Error fetching users:", error);
    }
  }, []);

  // ✅ Initial Session Check & Fetch Users
  useEffect(() => {
    axios
      .get("http://localhost:5000/session", { withCredentials: true })
      .then((response) => {
        if (response.data.success) {
          console.log("✅ Session Data:", response.data.session);

          const userRole = response.data.session.role; // Get role from session
          localStorage.setItem("role", userRole); // Store role

          console.log("✅ Role found, fetching users...");
          fetchUsers(); // Fetch users for all roles
        } else {
          console.warn("❌ No session found, checking token...");
          checkToken();
        }
      })
      .catch((error) => {
        console.error("❌ Session check failed:", error);
        checkToken();
      });
  }, [fetchUsers, checkToken]);

  const [role, setRole] = useState(localStorage.getItem("role") || "");

  useEffect(() => {
    // Whenever role is updated in localStorage, update state
    const storedRole = localStorage.getItem("role");
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  // Slice the users array to get only the users for the current page
  const currentUsers = users.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleCreateAdmin = () => {
    setShowModal(true);
  };

  const handleSaveAdmin = async () => {
    if (!newAdmin.email || !newAdmin.password.trim() || !newAdmin.role) {
      alert("❌ Please fill in all fields, including role and password!");
      return;
    }

    try {
      const formattedDate =
        newAdmin.date || new Date().toISOString().split("T")[0];

      // Store password before resetting state
      const tempPassword = newAdmin.password;

      const response = await fetch("http://localhost:5000/api/admins/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: newAdmin.email,
          password: tempPassword,
          date: formattedDate,
          role: newAdmin.role, // Role is dynamically assigned
        }),
      });

      const data = await response.json();
      console.log("API Response:", data);

      if (response.ok) {
        alert(
          `✅ Admin created successfully!\nEmail: ${data.result.email}\nPassword: ${tempPassword}`
        );

        // Copy credentials to clipboard
        copyCredentials(data.result.email, tempPassword, data.result.role);

        setShowModal(false);
        setNewAdmin({ email: "", password: "", date: "", role: "" });
        fetchUsers();
      } else {
        alert(`❌ Error: ${data.message || response.statusText}`);
      }
    } catch (error) {
      console.error("❌ Error saving admin:", error);
      alert("❌ An unexpected error occurred. Please try again.");
    }
  };

  const copyCredentials = (email, password, role) => {
    if (!password) {
      alert("⚠️ Password is missing! Try creating the admin again.");
      return;
    }

    const credentials = `Email: ${email}\nPassword: ${password}\nRole: ${role}`;
    navigator.clipboard
      .writeText(credentials)
      .then(() => {
        alert("📋 Credentials copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy credentials: ", err);
        alert("❌ Failed to copy credentials. Please try again.");
      });
  };

  return (
    <div className="content">
      <Navbar />
      <div className="container mt-2">
        <h3>Admin Content</h3>
        <div id="tableExample2">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0"></h5>
            {role === "superadmin" && (
              <button className="btn btn-primary" onClick={handleCreateAdmin}>
                Create Admin
              </button>
            )}
          </div>
          <div className="table-responsive scrollbar">
            <table className="table table-bordered table-striped fs--1 mb-0">
              <thead className="bg-200 text-900">
                <tr>
                  <th>Email</th>
                  <th>Date</th>
                  <th>Role</th>
                  <th>Permission</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((user, index) => (
                  <tr key={index}>
                    <td>{user.email}</td>
                    <td>
                      {user.date
                        ? new Date(user.date).toISOString().split("T")[0]
                        : "N/A"}
                    </td>
                    <td>{user.role ? user.role : "No Role"}</td>
                    <td>
                      {role === "superadmin" ? (
                        <button
                          className="btn btn-sm btn-primary"
                          onClick={() => togglePageModal(user)}
                        >
                          {/* Select Role */}
                          <FaPager />
                        </button>
                      ) : (
                        <FaLock />
                      )}
                    </td>
                    <td>
                      {role === "superadmin" && (
                        <button className="btn btn-sm btn-danger">
                          <i></i>
                          <FaBan />
                          {/* Block */}
                        </button>
                      )}
                      <span style={{ margin: "0 8px" }}></span>
                      {role === "admin" ||
                        (role === "superadmin" && (
                          <button
                            className="btn btn-sm btn-info"
                            onClick={() =>
                              copyCredentials(
                                user.email,
                                user.password,
                                user.role
                              )
                            }
                          >
                            <i></i>
                            <FaCopy />
                            {/* Copy Credentials */}
                          </button>
                        ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex flex-column align-items-end mt-3">
            <div className="w-100 border-top mb-2"></div>
            <div className="d-inline-flex align-items-center border rounded p-2">
              <button
                className="btn btn-sm btn-outline-secondary me-2"
                onClick={handlePrev}
                disabled={currentPage === 1}
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <ul className="pagination mb-0">
                {Array.from({ length: totalPages }, (_, index) => (
                  <li
                    key={index + 1}
                    className={`page-item ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
              <button
                className="btn btn-sm btn-outline-secondary ms-2"
                onClick={handleNext}
                disabled={currentPage === totalPages}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {showPageModal && (
        <div className="modal d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  Select Pages for {currentUser?.email}
                </h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setShowPageModal(false)} // Close modal when clicked
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <div className="d-flex justify-content-between">
                      <label>Select Pages</label>
                      <div>
                        {/* List of checkboxes for different pages */}
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            checked={selectedPages.includes("Dashboard")}
                            onChange={() => togglePage("Dashboard")}
                          />
                          <label className="form-check-label">Dashboard</label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            checked={selectedPages.includes("Users")}
                            onChange={() => togglePage("Users")}
                          />
                          <label className="form-check-label">Users</label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            checked={selectedPages.includes("Reports")}
                            onChange={() => togglePage("Reports")}
                          />
                          <label className="form-check-label">Reports</label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            checked={selectedPages.includes("Settings")}
                            onChange={() => togglePage("Settings")}
                          />
                          <label className="form-check-label">Settings</label>
                        </div>
                        {/* Add more pages as needed */}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary mt-3"
                    onClick={handleSavePage} // Save pages for the current user
                  >
                    Save Pages
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Modal for Creating Admin */}
      {showModal && (
        <div className="modal d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create Admin</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setShowModal(false)}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={newAdmin.email}
                      onChange={(e) =>
                        setNewAdmin({
                          ...newAdmin,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Password</label>
                    <div className="input-group">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={newAdmin.password}
                        onChange={(e) =>
                          setNewAdmin({
                            ...newAdmin,
                            password: e.target.value,
                          })
                        }
                        required
                      />
                      <span
                        className="input-group-text"
                        style={{ cursor: "pointer" }}
                        onClick={handlePasswordToggle}
                      >
                        {showPassword ? (
                          <i className="fas fa-eye-slash"></i>
                        ) : (
                          <i className="fas fa-eye"></i>
                        )}
                      </span>
                    </div>
                    {/* Validation Messages */}
                    <small className="form-text text-muted">
                      <ul className="list-group list-group-flush mt-2">
                        <li
                          className={`list-group-item ${
                            passwordValidation.lengthValid
                              ? "text-success"
                              : "text-danger"
                          }`}
                        >
                          {passwordValidation.lengthValid ? (
                            <i className="fas fa-check-circle me-2 text-success"></i>
                          ) : (
                            <i className="fas fa-times-circle me-2 text-danger"></i>
                          )}
                          Password must be at least 6 characters long
                        </li>
                        <li
                          className={`list-group-item ${
                            passwordValidation.lowerCaseValid
                              ? "text-success"
                              : "text-danger"
                          }`}
                        >
                          {passwordValidation.lowerCaseValid ? (
                            <i className="fas fa-check-circle me-2 text-success"></i>
                          ) : (
                            <i className="fas fa-times-circle me-2 text-danger"></i>
                          )}
                          Password must include at least one lowercase letter
                        </li>
                        <li
                          className={`list-group-item ${
                            passwordValidation.upperCaseValid
                              ? "text-success"
                              : "text-danger"
                          }`}
                        >
                          {passwordValidation.upperCaseValid ? (
                            <i className="fas fa-check-circle me-2 text-success"></i>
                          ) : (
                            <i className="fas fa-times-circle me-2 text-danger"></i>
                          )}
                          Password must include at least one uppercase letter
                        </li>
                        <li
                          className={`list-group-item ${
                            passwordValidation.digitValid
                              ? "text-success"
                              : "text-danger"
                          }`}
                        >
                          {passwordValidation.digitValid ? (
                            <i className="fas fa-check-circle me-2 text-success"></i>
                          ) : (
                            <i className="fas fa-times-circle me-2 text-danger"></i>
                          )}
                          Password must include at least one digit
                        </li>
                      </ul>
                    </small>
                  </div>
                  <div className="form-group mt-3">
                    <label>Role</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newAdmin.role}
                      onChange={(e) =>
                        setNewAdmin({
                          ...newAdmin,
                          role: e.target.value,
                        })
                      }
                      placeholder="Enter role (e.g., admin, manager, cook)"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Date</label>
                    <input
                      type="text"
                      className="form-control"
                      value={
                        newAdmin.date || new Date().toISOString().split("T")[0]
                      }
                      readOnly
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary mt-3"
                    onClick={handleSaveAdmin}
                  >
                    Save Admin
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;
