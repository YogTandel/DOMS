import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import { Modal, Button, Form } from "react-bootstrap";
import { FaPlus, FaEdit, FaTrashAlt } from "react-icons/fa";

const ScheduleMenuForWeek = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newMenu, setNewMenu] = useState({
    title: "",
    price: "",
    ingredients: [],
    cookInvolve: "Hot", // Default value
    menuType: "Starter", // Default value
    scheduledDays: [],
  });
  const itemsPerPage = 5;

  // Fetch menu data from API
  const fetchMenus = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/menu/allmenues", {
        method: "GET",
        credentials: "include",
      });
      const result = await response.json();
      console.log("✅ Fetched Menu Data:", result);

      // Check if `data` is an object containing an array
      if (
        result.status === "success" &&
        result.data &&
        Array.isArray(result.data.menus)
      ) {
        setMenuItems(result.data.menus); // Access the correct array inside `data`
      } else {
        console.error(
          "❌ Failed to fetch menu data: Expected an array, got",
          result
        );
      }
    } catch (error) {
      console.error("❌ Error fetching menu data:", error);
    }
  };
  useEffect(() => {
    fetchMenus();
  }, []);

  // Calculate indexes
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const currentItems = menuItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(menuItems.length / itemsPerPage);

  const [role, setRole] = useState(localStorage.getItem("role") || "");

  useEffect(() => {
    // Whenever role is updated in localStorage, update state
    const storedRole = localStorage.getItem("role");
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);
  const handleEdit = (menu) => {
    setSelectedMenu(menu);
    setShowModal(true);
  };

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedMenu((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission (updating menu)
  const handleSave = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/menu/menues/${selectedMenu._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(selectedMenu),
        }
      );

      if (response.ok) {
        alert("✅ Menu updated successfully!");
        fetchMenus(); // Refresh menu list
        setShowModal(false);
      } else {
        alert("❌ Failed to update menu.");
      }
    } catch (error) {
      console.error("Error updating menu:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this menu item?"))
      return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/menu/menues/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("✅ Menu deleted successfully!");
        fetchMenus(); // Refresh menu list
      } else {
        console.error("❌ Failed to delete menu.");
        alert("Failed to delete menu.");
      }
    } catch (error) {
      console.error("❌ Error deleting menu:", error);
    }
  };

  const handleNewMenuChange = (e) => {
    const { name, value } = e.target;
    if (name === "ingredients" || name === "scheduledDays") {
      setNewMenu((prev) => ({
        ...prev,
        [name]: value.split(",").map((item) => item.trim()),
      }));
    } else {
      setNewMenu((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleAddMenu = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/menu/menues", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMenu),
      });

      if (response.ok) {
        alert("✅ Menu added successfully!");
        fetchMenus(); // Refresh the menu list
        setNewMenu({
          title: "",
          price: "",
          ingredients: [],
          cookInvolve: "Hot",
          menuType: "Starter",
          scheduledDays: [],
        }); // Reset form
        setShowAddModal(false); // Close modal
      } else {
        alert("❌ Failed to add menu.");
      }
    } catch (error) {
      console.error("❌ Error adding menu:", error);
    }
  };

  return (
    <div className="content">
      <Navbar />
      <div className="container mt-2">
        <div className="tableExample2">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0"></h5>
            {role === "superadmin" && (
              <button
                className="btn btn-primary"
                onClick={() => setShowAddModal(true)}
              >
                {" "}
                <FaPlus />
                Add Menu
              </button>
            )}
          </div>
          <div className="table-responsive scrollbar">
            <table className="table table-bordered table-striped fs--1 mb-0">
              <thead className="bg-200 text-900">
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Ingredients</th>
                  <th>Cook Involve</th>
                  <th>Menu Type</th>
                  <th>Scheduled Days</th>
                  <th>Enabled</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((menu, index) => (
                  <tr key={index}>
                    <td>{menu.title}</td>
                    <td>${menu.price.toFixed(2)}</td>
                    <td>{menu.ingredients.join(", ")}</td>
                    <td>{menu.cookInvolve}</td>
                    <td>{menu.menuType}</td>
                    <td>{menu.scheduledDays.join(", ")}</td>
                    <td>{menu.isEnable ? "Yes" : "No"}</td>
                    <td>
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => handleEdit(menu)}
                      >
                        <FaEdit /> {/* Edit icon */}
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(menu._id)}
                      >
                        <FaTrashAlt />
                        {/* Delete icon */}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Pagination */}
        <nav>
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 && "disabled"}`}>
              <button
                className="page-link"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <i className="fas fa-chevron-left"></i>
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}

            <li
              className={`page-item ${
                currentPage === totalPages && "disabled"
              }`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {selectedMenu && (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Menu Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={selectedMenu.title}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={selectedMenu.price}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Ingredients (comma separated)</Form.Label>
                <Form.Control
                  type="text"
                  name="ingredients"
                  value={selectedMenu.ingredients.join(", ")}
                  onChange={(e) =>
                    setSelectedMenu((prev) => ({
                      ...prev,
                      ingredients: e.target.value.split(", "),
                    }))
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Cook Involve</Form.Label>
                <Form.Select
                  name="cookInvolve"
                  value={selectedMenu.cookInvolve}
                  onChange={handleChange}
                >
                  <option value="Hot">Hot</option>
                  <option value="Spicy">Spicy</option>
                  <option value="Medium">Medium</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Menu Type</Form.Label>
                <Form.Select
                  name="menuType"
                  value={selectedMenu.menuType}
                  onChange={handleChange}
                >
                  <option value="Starter">Starter</option>
                  <option value="MainCourse">Main Course</option>
                  <option value="Dessert">Dessert</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Scheduled Days (comma separated)</Form.Label>
                <Form.Control
                  type="text"
                  name="scheduledDays"
                  value={selectedMenu.scheduledDays.join(", ")}
                  onChange={(e) =>
                    setSelectedMenu((prev) => ({
                      ...prev,
                      scheduledDays: e.target.value.split(", "),
                    }))
                  }
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {showAddModal && (
        <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Menu Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={newMenu.title}
                  onChange={handleNewMenuChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={newMenu.price}
                  onChange={handleNewMenuChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Ingredients (comma separated)</Form.Label>
                <Form.Control
                  type="text"
                  name="ingredients"
                  value={newMenu.ingredients.join(", ")}
                  onChange={handleNewMenuChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Cook Involve</Form.Label>
                <Form.Select
                  name="cookInvolve"
                  value={newMenu.cookInvolve}
                  onChange={handleNewMenuChange}
                >
                  <option value="Hot">Hot</option>
                  <option value="Spicy">Spicy</option>
                  <option value="Medium">Medium</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Menu Type</Form.Label>
                <Form.Select
                  name="menuType"
                  value={newMenu.menuType}
                  onChange={handleNewMenuChange}
                >
                  <option value="Starter">Starter</option>
                  <option value="MainCourse">Main Course</option>
                  <option value="Dessert">Dessert</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Scheduled Days (comma separated)</Form.Label>
                <Form.Control
                  type="text"
                  name="scheduledDays"
                  value={newMenu.scheduledDays.join(", ")}
                  onChange={handleNewMenuChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowAddModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleAddMenu}>
              Add Menu
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default ScheduleMenuForWeek;
